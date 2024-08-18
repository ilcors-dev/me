use getrandom::getrandom;
use piet::{Color, RenderContext};
use piet_web::WebRenderContext;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

// Macro to expose our Rust functions to JavaScript via WebAssembly
#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
    canvas: HtmlCanvasElement,
    cell_size: f64,
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}

impl Universe {
    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += self.cells[idx] as u8;
            }
        }
        count
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }
}

#[wasm_bindgen]
impl Universe {
    pub fn new(width: u32, height: u32, cell_size: f64, canvas_id: &str) -> Universe {
        let width = width;
        let height = height;

        let cells: Vec<Cell> = (0..width * height)
            .map(|_| {
                let mut buffer = [0u8; 4];
                getrandom(&mut buffer).expect("Failed to get random data");

                if u32::from_ne_bytes(buffer) % 2 == 0 {
                    Cell::Alive
                } else {
                    Cell::Dead
                }
            })
            .collect();

        web_sys::console::log_1(&format!("cells: {:?}", cells.len()).into());

        let document = web_sys::window().unwrap().document().unwrap();
        let canvas = document
            .get_element_by_id(canvas_id)
            .unwrap()
            .dyn_into::<HtmlCanvasElement>()
            .unwrap();

        Universe {
            width,
            height,
            cells,
            canvas,
            cell_size,
        }
    }

    pub fn tick(&mut self) {
        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                let next_cell = match (cell, live_neighbors) {
                    // Rule 1: Any live cell with fewer than two live neighbors dies, as if by underpopulation.
                    (Cell::Alive, x) if x < 2 => Cell::Dead,
                    // Rule 2: Any live cell with two or three live neighbors lives on to the next generation.
                    (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    // Rule 3: Any live cell with more than three live neighbors dies, as if by overpopulation.
                    (Cell::Alive, x) if x > 3 => Cell::Dead,
                    // Rule 4: Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                    (Cell::Dead, 3) => Cell::Alive,
                    // All other cells remain in the same state.
                    (otherwise, _) => otherwise,
                };

                next[idx] = next_cell;
            }
        }

        self.cells = next;
    }

    pub fn render(&self, dead_color_hex: &str, alive_color_hex: &str) -> Result<(), JsValue> {
        let context = self
            .canvas
            .get_context("2d")?
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()?;

        let mut render_context = WebRenderContext::new(context, web_sys::window().unwrap());

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];

                let color = if cell == Cell::Alive {
                    Color::from_hex_str(alive_color_hex).unwrap()
                } else {
                    Color::from_hex_str(dead_color_hex).unwrap()
                };

                let rect = piet::kurbo::RoundedRect::from_origin_size(
                    (row as f64 * self.cell_size, col as f64 * self.cell_size),
                    (self.cell_size, self.cell_size),
                    10.0,
                );
                render_context.fill(rect, &color);
            }
        }

        render_context.finish().unwrap();
        Ok(())
    }
}