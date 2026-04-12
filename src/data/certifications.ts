export interface Certification {
  name: string;
  issuer: string;
  status: "earned" | "expected";
}

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    status: "earned",
  },
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    status: "earned",
  },
  {
    name: "Claude Certification (x2)",
    issuer: "Anthropic",
    status: "earned",
  },
  {
    name: "Terraform Associate (003)",
    issuer: "HashiCorp",
    status: "earned",
  },
];
