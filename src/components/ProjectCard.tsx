import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  name,
  description,
  techStack,
  repoUrl,
  liveUrl,
}: Project) {
  return (
    <div className="bg-surface border-[0.5px] border-accent/50 hover:border-accent rounded-lg p-6 transition-colors duration-300 flex flex-col">
      <h3 className="font-mono text-accent text-sm font-semibold mb-3">
        {name}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-surface-light text-text-muted text-xs font-mono px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-dim transition-colors"
          >
            <span>🚀 Try live</span>
            <ExternalLink size={12} />
          </a>
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-foreground transition-colors"
        >
          <span>📂 Source</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}
