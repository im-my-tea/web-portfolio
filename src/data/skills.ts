export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Bash", "HCL", "SQL", "YAML"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "GCP", "Azure"],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Terraform", "Kubernetes", "Docker", "Linux"],
  },
  {
    category: "CI/CD & Automation",
    items: ["GitHub Actions", "Cloud Build"],
  },
];
