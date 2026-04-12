import { ScrollReveal } from "./ScrollReveal";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-mono text-accent text-sm uppercase tracking-widest mb-10">
            <span className="text-text-muted">$ </span>
            {title}
          </h2>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
