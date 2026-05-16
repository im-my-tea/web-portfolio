import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <SectionWrapper id="certifications" title="certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-surface border-[0.5px] border-accent rounded-lg p-5 flex items-start justify-between"
          >
            <div className="min-w-0">
              <p className="font-mono text-sm text-foreground mb-1">
                {cert.name}
              </p>
              <p className="text-xs text-text-muted mb-2">{cert.issuer}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-dim transition-colors"
                >
                  <span>🔗 verify</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
            <span
              className={`shrink-0 ml-3 text-xs font-mono px-2 py-0.5 rounded ${
                cert.status === "earned"
                  ? "bg-accent/10 text-accent"
                  : "bg-surface-light text-text-muted"
              }`}
            >
              {cert.status === "earned" ? "✓" : "expected"}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
