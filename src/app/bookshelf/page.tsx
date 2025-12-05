import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "📚 Bookshelf",
  description:
    "The books I've read.",
};

const books: {
  title: string;
  author: string;
  year?: number;
  link?: string;
}[] = [
    {
      title: "Animal Farm",
      author: "George Orwell",
      link: "https://www.goodreads.com/book/show/170448.Animal_Farm"
    },
    {
      title: "1984",
      author: "George Orwell",
      link: "https://www.goodreads.com/book/show/61439040-1984"
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      link: "https://www.goodreads.com/book/show/30659.Meditations"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      link: "https://www.goodreads.com/book/show/23692271-sapiens"
    },
    {
      title: "Homo Deus: A History of Tomorrow",
      author: "Yuval Noah Harari",
      link: "https://www.goodreads.com/book/show/31138556-homo-deus"
    },
    {
      title: "Computing Machinery And Intelligence",
      author: "Alan Turing",
      link: "https://www.goodreads.com/book/show/17697774-computing-machinery-and-intelligence"
    },
    {
      title: "Lo Scudo Di Talos",
      author: "Valerio Massimo Manfredi",
      link: "https://www.goodreads.com/book/show/3288319-lo-scudo-di-talos"
    },
    {
      title: "The Last Legion",
      author: "Valerio Massimo Manfredi",
      link: "https://www.goodreads.com/book/show/601221.The_Last_Legion"
    },
  ]

export default function Page() {
  return (
    <main className="container mx-auto p-4 sm:p-10 lg:p-6">
      <Navbar />
      <article className="mt-10">
        <header className="mb-8">
          <h1 className="mb-3 text-center text-2xl font-bold sm:text-start sm:text-4xl">
            📚 Bookshelf
          </h1>
        </header>

        <div className="prose max-w-none dark:prose-invert">
          <p>
            This is a list of the books I've read. I'm not an avid reader, but I do enjoy a book now and then.
          </p>
          <p>In no particular order:</p>
          <ul className="mt-6 list-disc">
            {books.map((book, i) => (
              <li key={i}>
                {book.link ? (
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    <strong>{book.title}</strong>
                  </a>
                ) : (
                  <strong>{book.title}</strong>
                )
                } by {book.author}{book.year ? `, ${book.year}` : ""}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
