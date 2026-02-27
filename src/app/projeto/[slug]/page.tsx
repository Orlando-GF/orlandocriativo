import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    const projectIndex = projects.findIndex((p) => p.slug === slug);

    if (!project || !project.caseStudy) {
        notFound();
    }

    return (
        <ProjectClient
            project={project}
            projectIndex={projectIndex}
        />
    );
}
