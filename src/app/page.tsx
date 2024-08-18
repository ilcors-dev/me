import projects from "@/../config/projects.json";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { chunk } from "@/util/lib";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4 sm:p-10 lg:p-6">
      <Navbar />
      <div className="mt-20 space-y-8">
        <h1 className="text-2xl font-bold sm:text-4xl">
          👋🏻 I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent dark:from-green-500 dark:to-green-300">
            Luca
          </span>
          , a software engineer from Italy, Bologna.
        </h1>
        <p className="text-lg sm:text-xl">
          👨🏻‍💻 I talk to computers and they (sometimes) respond to me.
        </p>
        <p className="text-lg sm:text-xl">
          📚 I hold a BSc degree in computer engineering and I&apos;m currently
          pursuing a Master&apos;s degree in the same field.
        </p>
      </div>
      <div className="mt-20 space-y-5">
        <h2 className="text-xl font-bold sm:text-2xl">Projects</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {chunk(projects, Math.ceil(projects.length / 3)).map((chunk, i) => (
            <div key={i} className="flex flex-col gap-8">
              {chunk.map((project) => (
                <Link key={i} href={project.url}>
                  <ProjectCard
                    title={project.title}
                    thumbnailUrl={project.thumbnailUrl}
                    skills={project.skills}
                    cardDescription={project.description}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
