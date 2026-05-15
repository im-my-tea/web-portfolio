import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <p className="font-mono text-text-muted text-sm mb-4">
          <span className="text-accent">~</span> hi, i&apos;m
        </p>
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Ayush Maiti
        </h1>
        <div className="font-mono text-lg md:text-2xl text-accent mb-6">
          Cloud &amp; Platform Engineer
          <span className="animate-blink ml-1">_</span>
        </div>
        <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-8">
          <span className="font-mono text-accent/60">$ </span>
          Building production infrastructure on AWS, GCP, and Azure. Live
          projects below.
        </p>
        <div className="mb-10">
          <a
            href="#projects"
            className="inline-block font-mono text-sm text-accent border border-accent/40 rounded px-5 py-2 hover:bg-accent/10 transition-colors"
          >
            See projects →
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={social.email}
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
