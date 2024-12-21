// components/ProjectCard.tsx
import { ProjectCardProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, techStack, demoLink, githubLink, image } = project;
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link href={`/detail/${project.slug}`}>
        {image && (
          <div className="mb-4">
            <Image
              src={image}
              alt={name}
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
        )}
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="mb-2">{description}</p>
        <p className="mb-2">
          <strong>Tech:</strong> {techStack.join(", ")}
        </p>
      </Link>
      <div className="flex space-x-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
