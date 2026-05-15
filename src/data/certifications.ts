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
    name: "HashiCorp Terraform Associate (004)",
    issuer: "HashiCorp",
    status: "earned",
  },
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    status: "earned",
  },
];
