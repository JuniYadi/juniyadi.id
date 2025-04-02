import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Juni Yadi",
  description:
    "Explore projects created by Juni Yadi - software engineer, developer and creator",
};

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description:
      "My personal website built with Next.js, TypeScript, and Tailwind CSS",
    imageUrl: "/images/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://juniyadi.id",
    githubUrl: "https://github.com/JuniYadi/juniyadi.id",
  },
  {
    id: "project-2",
    title: "Pulumi Easy",
    description:
      "pulumi-easy is a Python package that simplifies AWS infrastructure-as-code using Pulumi. It provides higher-level abstractions that make it easier to create common AWS resources without having to write boilerplate code.",
    imageUrl: "/images/projects/ecommerce.png",
    tags: ["Python", "Pulumi", "AWS"],
    demoUrl: "https://pypi.org/project/pulumi-easy",
    githubUrl: "https://github.com/JuniYadi/python-pulumi",
  },
  {
    id: "project-3",
    title: "Weather App",
    description:
      "A simple weather application that displays current weather and forecasts for locations worldwide",
    imageUrl: "/images/projects/weather.png",
    tags: ["JavaScript", "Weather API", "CSS"],
    demoUrl: "https://weather.juniyadi.id",
    githubUrl: "https://github.com/JuniYadi/weather-app",
  },
  // You can add more projects here
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
        Here are some of the projects I&apos;ve worked on. Each represents
        challenges I&apos;ve overcome and skills I&apos;ve developed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {project.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Live Demo
                  </Link>
                )}

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:underline font-medium"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
