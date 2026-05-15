export interface Certification {
  name: string;
  issuer: string;
  status: "earned" | "expected";
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    status: "earned",
    verifyUrl:
      "https://www.credly.com/badges/34bd9daa-5c7a-4def-94a4-d6bf4ba31457/public_url",
  },
  {
    name: "HashiCorp Terraform Associate (004)",
    issuer: "HashiCorp",
    status: "earned",
    verifyUrl:
      "https://www.credly.com/badges/529caa18-0103-4358-bc35-c79912e17844/public_url",
  },
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    status: "earned",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/ayushmaiti-9835/credentials/dd918bedc90bd180",
  },
];
