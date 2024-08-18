"use client";

import classNames from "classnames";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import Link from "next/link";

interface Props {
  title: string;
  thumbnailUrl: string;
  skills: string[];
  cardDescription: string;
  url?: string;
}

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> & Props
>(
  (
    { cardDescription, className, title, skills, thumbnailUrl, url, ...props },
    ref,
  ) => {
    const p = {
      ...props,
      className: classNames(
        className,
        "rounded-md border-2 border-black dark:border-white",
        "relative",
      ),
    };

    if (url) {
      return (
        <Link href={url} target="_blank" {...p}>
          <Content
            cardDescription={cardDescription}
            title={title}
            skills={skills}
            thumbnailUrl={thumbnailUrl}
            url={url}
          />
        </Link>
      );
    }

    return (
      <div ref={ref} {...p}>
        <Content
          cardDescription={cardDescription}
          title={title}
          skills={skills}
          thumbnailUrl={thumbnailUrl}
          url={url}
        />
      </div>
    );
  },
);

const Content = ({
  cardDescription,
  title,
  skills,
  thumbnailUrl,
  url,
}: Props) => {
  return (
    <>
      {url && (
        <Badge variant="transparent" className="absolute right-2 top-2">
          Details <ExternalLink size={14} className="ml-1" />
        </Badge>
      )}
      <Image
        alt={`Project ${title}`}
        src={thumbnailUrl}
        height={200}
        width={300}
        className="h-auto w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{cardDescription}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
