"use client";

import classNames from "classnames";
import Image from "next/image";
import { title } from "process";
import React, { useState } from "react";
import { Badge } from "./badge";

interface Props {
  title: string;
  thumbnailUrl: string;
  skills: string[];
  cardDescription: string;
}

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Props
>(
  (
    { cardDescription, className, title, skills, thumbnailUrl, ...props },
    ref,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classNames(
          className,
          "rounded-md border-2 border-black dark:border-white",
        )}
      >
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
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
