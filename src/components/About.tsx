import { SectionWrapper } from "./SectionWrapper";

const focusAreas = [
  "Cloud Architecture",
  "Platform Engineering",
  "Infrastructure as Code",
  "CI/CD Automation",
  "Serverless",
  "MLOps",
];

export function About() {
  return (
    <SectionWrapper id="about" title="about">
      <div className="grid md:grid-cols-[2fr_1fr] gap-10">
        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            I&apos;m a Cloud &amp; Platform Engineer focused on building
            reliable, scalable infrastructure across AWS, GCP, and Azure. I
            specialize in infrastructure as code, container orchestration, and
            automating everything that can be automated.
          </p>
          <p>
            From provisioning Kubernetes clusters with Terraform to building
            serverless cost-optimization tools, I enjoy solving real
            infrastructure problems with clean, reproducible solutions.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-text-muted mb-3">
            focus_areas:
          </p>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="bg-surface-light text-text-muted text-xs font-mono px-3 py-1.5 rounded border border-border"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
