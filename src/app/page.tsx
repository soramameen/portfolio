import Head from "next/head";
import ProjectCard from "./components/layout/ProjectCard";
import { projects } from "./lib/projects";
import { Project } from "./types/types";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | My Portfolio</title>
      </Head>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          私のプロジェクトとスキルを紹介しています。
        </p>
      </section>

      {projects.map((project: Project) => {
        return (
          <>
            <ProjectCard key={project.name} project={project} />;
          </>
        );
      })}
    </div>
  );
}
