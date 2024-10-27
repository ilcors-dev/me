import projects from "@/../config/projects.json";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { chunk } from "@/util/lib";
import { FileUser, Linkedin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "👋🏻 Hi, I'm Luca",
  description: "A software engineer from Italy, Bologna.",
};

export default function Home() {
  return (
    <main className="container mx-auto p-4 sm:p-10 lg:p-6">
      <Navbar />
      <div className="mt-10 space-y-8">
        <h1 className="text-center text-2xl font-bold sm:text-start sm:text-4xl">
          👋🏻 I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent dark:from-green-500 dark:to-green-300">
            Luca
          </span>
          , a software engineer from Italy, Bologna.
        </h1>
        <p className="text-center text-lg sm:text-start sm:text-xl">
          👨🏻‍💻 I talk to computers and they (sometimes) respond to me.
        </p>
        <p className="text-center text-lg sm:text-start sm:text-xl">
          📚 I hold a BSc degree in computer engineering and I&apos;m currently
          pursuing a Master&apos;s degree in the same field.
        </p>
        <p className="text-center text-lg sm:text-start sm:text-xl">
          🔬 I&apos;m a curious person. In my free time, I love experimenting
          with new technologies, learning new things, and trying new programming
          languages.
        </p>
        <p className="text-center text-lg sm:text-start sm:text-xl">
          ⛰️ I&apos;m not afraid of challenges; they are meant to be overcome. I
          enjoy feeding my brain with new problems to solve.
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start">
        <Link href="https://github.com/ilcors-dev" aria-label="Github Profile">
          <Image
            height="24"
            width="24"
            src="https://unpkg.com/simple-icons@v13/icons/github.svg"
            alt="Github"
            aria-hidden
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lucacorsettidev"
          aria-label="Linkedin Profile"
        >
          <Linkedin size={24} aria-hidden />
        </Link>
        <Link href="https://x.com/llcors" aria-label="X Profile">
          <Image
            height="24"
            width="24"
            src="https://unpkg.com/simple-icons@v13/icons/x.svg"
            alt="X (Twitter)"
            aria-hidden
          />
        </Link>
        <Link
          href="https://docs.google.com/document/d/1NvZ0JrBKd_C42G7u32PVn69v0q2-7Czw/edit?usp=sharing&ouid=117923712126612286389&rtpof=true&sd=true"
          aria-label="Curriculum Vitae"
        >
          <FileUser size={24} aria-hidden />
        </Link>
      </div>
      <div className="mt-20 space-y-5">
        <h2 className="text-xl font-bold sm:text-2xl">Projects</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {chunk(projects, Math.ceil(projects.length / 3)).map((chunk, i) => (
            <div key={i} className="flex flex-col gap-8">
              {chunk.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  thumbnailUrl={project.thumbnailUrl}
                  skills={project.skills}
                  cardDescription={project.description}
                  url={project.githubUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
