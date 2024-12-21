// pages/projects.tsx
import Head from "next/head";
import { projects } from "../lib/projects";
import ProjectCard from "../components/layout/ProjectCard";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
