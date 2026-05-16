import { SectionWrapper } from "./SectionWrapper";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills" title="skills">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="break-inside-avoid mb-6">
            <p className="font-mono text-xs text-text-muted mb-3">
              {group.category.toLowerCase()}:
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 bg-surface-light text-foreground text-xs font-mono px-3 py-1.5 rounded border-[0.5px] border-accent"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
