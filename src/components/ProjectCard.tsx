import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ name, description, techStack, repoUrl }: Project) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono text-accent text-sm font-semibold group-hover:text-accent-dim transition-colors">
          {name}
        </h3>
        <ExternalLink
          size={14}
          className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 shrink-0 ml-2"
        />
      </div>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-surface-light text-text-muted text-xs font-mono px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
