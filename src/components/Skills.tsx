import { SectionWrapper } from "./SectionWrapper";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills" title="skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-xs text-text-muted mb-3">
              {group.category.toLowerCase().replace(/ & /g, "_")}:
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-surface-light text-foreground text-xs font-mono px-3 py-1.5 rounded border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
