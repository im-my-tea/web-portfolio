import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";
import { SectionWrapper } from "./SectionWrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact" title="contact">
      <div className="text-center">
        <p className="text-text-muted text-base mb-8 max-w-md mx-auto">
          Interested in working together or just want to say hi? Feel free to
          reach out.
        </p>
        <div className="flex items-center justify-center gap-8 mb-16">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors font-mono text-sm"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors font-mono text-sm"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href={social.email}
            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors font-mono text-sm"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
        <div className="border-t border-border/50 pt-8">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Ayush Maiti
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
