// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import { Project } from "@/app/types/types";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { name, description, techStack, demoLink, githubLink, image } =
    project as Project;

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{name}</h1>
      {image && (
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-contain"
          />
        </div>
      )}
      <p className="text-lg">{description}</p>
      {/* <div>
        <h2 className="text-2xl font-semibold">Role</h2>
        <p>{role}</p>
      </div> */}
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      {/* {achievements.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )} */}
      <div className="flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            View GitHub
          </a>
        )}
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        ← Back to Projects
      </Link>
    </div>
  );
}
