export interface Skill {
  name: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", color: "#3776AB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Bash", color: "#4EAA25" },
      { name: "HCL", color: "#844FBA" },
      { name: "SQL", color: "#4479A1" },
      { name: "YAML", color: "#CB171E" },
    ],
  },
  {
    category: "CI/CD & Automation",
    items: [
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "Cloud Build", color: "#4285F4" },
      { name: "AWS ECR", color: "#FF9900" },
      { name: "Artifact Registry", color: "#4285F4" },
      { name: "App Runner", color: "#FF9900" },
    ],
  },
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", color: "#FF9900" },
      { name: "GCP", color: "#4285F4" },
      { name: "Azure", color: "#0078D4" },
    ],
  },
  {
    category: "Infrastructure & Containers",
    items: [
      { name: "Terraform", color: "#844FBA" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Linux", color: "#FCC624" },
      { name: "AWS Lambda", color: "#FF9900" },
      { name: "Cloud Run", color: "#4285F4" },
      { name: "EKS", color: "#FF9900" },
      { name: "GKE", color: "#4285F4" },
      { name: "Cloud SQL", color: "#4285F4" },
      { name: "GCS", color: "#4285F4" },
      { name: "S3", color: "#569A31" },
      { name: "VPC", color: "#FF9900" },
      { name: "IAM", color: "#FF9900" },
    ],
  },
  {
    category: "Frameworks, Libraries & Testing",
    items: [
      { name: "FastAPI", color: "#009688" },
      { name: "Pydantic", color: "#E92063" },
      { name: "Boto3", color: "#FF9900" },
      { name: "pytest", color: "#0A9EDC" },
      { name: "scikit-learn", color: "#F7931E" },
      { name: "PostgreSQL", color: "#4169E1" },
    ],
  },
  {
    category: "Observability & Tools",
    items: [
      { name: "Cloud Monitoring", color: "#4285F4" },
      { name: "CloudWatch", color: "#FF4F8B" },
      { name: "SNS", color: "#FF4F8B" },
      { name: "EventBridge", color: "#FF4F8B" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Git", color: "#F05032" },
    ],
  },
];
