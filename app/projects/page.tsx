"use client"

import { projects } from "@/types/projects"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  return (
    <main className="container mx-auto my-16 flex flex-col gap-y-10 lg:w-10/12 xl:w-[60%] 2xl:w-1/2">
      <div className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Side Projects
          </h4>
          <p className="text-justify">
            This contains the fun side projects I have made so far. Some of
            these projects are aimed at helping me have a better experience
            writing code, while others are an experimentation with unfamiliar
            technologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.side.map((item) => (
            <ProjectCard item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            My University Projects
          </h4>
          <p className="text-justify">
            This section contains the fun projects I made to fulfill
            requirements from different classes throughout my college years.
            Most of these projects were made in collaboration with my group,
            which you can find at{" "}
            <a
              className="text-blue-500 hover:text-blue-600 hover:underline"
              href="https://github.com/abcd-edu"
              target="_blank"
            >
              ABCD-EDU
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.college.map((item) => (
            <ProjectCard item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}