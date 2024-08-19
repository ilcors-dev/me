"use client";

import { useEffect, useRef } from "react";

const GameOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const cellSize = 30;
    const dpr = window.devicePixelRatio || 1;

    let width = window.innerWidth * dpr;
    let height = window.innerHeight * dpr;

    canvas.width = width;
    canvas.height = height;

    const runWasm = async () => {
      const wasm = await import("./wasm/pkg");

      await wasm.default();
      const { Universe } = wasm;
      const universe = Universe.new(
        Math.ceil((height / cellSize) * 0.8),
        Math.ceil(width / cellSize),
        cellSize,
        canvas.id,
      );

      const renderLoop = () => {
        universe.tick();
        universe.render("#000000", "#30FF88");

        requestAnimationFrame(renderLoop);
      };

      renderLoop();
      // setInterval(renderLoop, 1000);
    };

    runWasm();
  }, []);

  return <canvas id="gol" ref={canvasRef} className="h-full w-full" />;
};

export default GameOfLife;
