import Navbar from "@/components/navbar";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog browser",
  description:
    "A glimpse of my thoughts, ideas and projects. A place where I share bits of me.",
};

export default function Page() {
  return (
    <main className="container mx-auto p-4 sm:p-10 lg:p-6">
      <Navbar />
      <div className="mt-10">
        <h1 className="text-center text-2xl font-bold sm:text-start sm:text-4xl">
          📚 Blog
        </h1>

        <div className="mt-14 space-y-4">
          <Link href="/blog/maang" className="group">
            <p className="text-xl font-bold group-hover:underline">
              My journey to a MAANG
            </p>
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time dateTime="2024-11-04">November 4, 2024</time>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
