export interface Project {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "gcp-mlops-capstone",
    name: "GCP MLOps Capstone",
    description:
      "Breast cancer detection API migrated from Azure to GCP serverless. End-to-end ML pipeline with FastAPI serving and Cloud Run deployment.",
    techStack: ["Python", "FastAPI", "Docker", "GCP Cloud Run", "scikit-learn"],
    repoUrl: "https://github.com/im-my-tea/gcp-mlops-capstone",
  },
  {
    slug: "aws-infrastructure-provisioner",
    name: "AWS Infrastructure Provisioner",
    description:
      "Multi-cloud infrastructure as code provisioning EKS clusters, VPCs, and GKE environments with Terraform.",
    techStack: ["Terraform", "AWS EKS", "VPC", "GCP GKE"],
    repoUrl: "https://github.com/im-my-tea/aws-infrastructure-provisioner",
  },
  {
    slug: "microservice-delivery-pipeline",
    name: "Microservice Delivery Pipeline",
    description:
      "CI/CD pipeline for microservices with automated testing, container builds, and ECR publishing via GitHub Actions.",
    techStack: ["GitHub Actions", "Docker", "AWS ECR", "Pytest"],
    repoUrl: "https://github.com/im-my-tea/microservice-delivery-pipeline",
  },
  {
    slug: "serverless-cost-sentinel",
    name: "Serverless Cost Sentinel",
    description:
      "Automated EC2 idle instance termination across 15+ regions using Lambda, EventBridge, and Terraform.",
    techStack: ["Lambda", "EventBridge", "Boto3", "Terraform"],
    repoUrl: "https://github.com/im-my-tea/serverless-cost-sentinel",
  },
  {
    slug: "resume-ai-crm",
    name: "Resume AI CRM",
    description:
      "Stateful AI-powered job application CRM with FastAPI backend, Cloud SQL persistence, and GCS storage.",
    techStack: ["FastAPI", "Cloud SQL", "GCS", "GCP Cloud Run"],
    repoUrl: "https://github.com/im-my-tea/resume-ai-crm",
  },
];
