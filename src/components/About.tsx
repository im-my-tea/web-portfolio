import { SectionWrapper } from "./SectionWrapper";

const focusAreas = [
    "Cloud Architecture",
    "Platform Engineering",
    "Infrastructure as Code",
    "CI/CD Automation",
    "Serverless",
];

export function About() {
    return (
        <SectionWrapper id="about" title="about">
            <div className="grid md:grid-cols-[2fr_1fr] gap-10">
                <div className="space-y-4 text-text-muted leading-relaxed">
                    <p>
                        Cloud &amp; Platform Engineer with ~3 years across
                        product delivery and infrastructure work. I ship
                        production services on AWS and GCP — FastAPI backends on
                        Cloud Run with structured logging, health checks, and
                        circuit-breaker resilience; Terraform-provisioned
                        multi-environment infrastructure; GitHub Actions CI/CD
                        with staging promotion and manual approval gates; and
                        Python-based serverless cost-control automation on
                        Lambda.
                    </p>
                    <p>
                        Every project on this site is deployed, public, and
                        ready to walk through end-to-end. Click any project
                        below to see live URLs, source code, and the engineering
                        decisions behind it.
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
