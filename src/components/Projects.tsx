import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionWrapper id="projects" title="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
