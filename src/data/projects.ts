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
    slug: "resume-ai-crm",
    name: "Resume AI CRM — Production Backend + AI Integration",
    description:
      "Production-grade FastAPI backend with layered architecture (controller → service → repository) and dual-mode storage abstraction — single env var swaps SQLite/local filesystem for Cloud SQL + GCS, enabling identical code paths from laptop to production. Hardened with structured JSON logging (X-Request-ID propagation), /health endpoint verifying Cloud SQL + GCS connectivity, Cloud Monitoring uptime checks with email alerting, and a Python circuit breaker on the Gemini API with graceful degradation. pytest suite running green in GitHub Actions CI on every push. Auto-deployed to Cloud Run via Cloud Build with commit-SHA-tagged images.",
    techStack: [
      "Python",
      "FastAPI",
      "Cloud SQL",
      "GCS",
      "Gemini API",
      "GCP Cloud Run",
      "pytest",
    ],
    repoUrl: "https://github.com/im-my-tea/resume-ai-crm",
    liveUrl:
      "https://resume-ai-crm-1068162498226.us-central1.run.app/docs",
  },
  {
    slug: "terraform-infrastructure-provisioner",
    name: "Terraform Infrastructure Provisioner — Multi-Cloud IaC",
    description:
      "Terraform for AWS VPC + EKS with OIDC/IRSA (pod-level IAM without static credentials), S3 remote backend with state locking, and variable validation blocks. Module structure validated against real GCP infrastructure via full init → plan → apply → destroy cycle. Extended to provision the complete resume-ai-crm GCP stack — four modules (iam, database, storage, compute) composed via a root module that wires service account, Cloud SQL Postgres, GCS bucket, and Cloud Run service through module outputs.",
    techStack: [
      "Terraform",
      "AWS VPC",
      "EKS",
      "GCP VPC",
      "GKE",
      "Cloud Run",
      "Cloud SQL",
      "IAM",
      "S3 Remote State",
    ],
    repoUrl:
      "https://github.com/im-my-tea/terraform-infrastructure-provisioner",
  },
  {
    slug: "serverless-cost-sentinel",
    name: "Serverless Cost Sentinel — AWS Lambda",
    description:
      "EventBridge cron triggers Lambda to scan 15+ AWS regions in parallel via ThreadPoolExecutor, stopping EC2 instances tagged Env:Dev. SNS publishes per-region stop notifications; S3 uploads timestamped JSON summary reports after each run; both guarded by environment-variable presence for clean local execution. Custom @handle_aws_errors decorator wraps Boto3 calls for structured exception handling and CloudWatch logging. Full Terraform IaC: Lambda, least-privilege IAM, EventBridge cron, SNS topic with email subscription, S3 bucket, and Lambda invoke permissions.",
    techStack: [
      "Python",
      "Lambda",
      "EventBridge",
      "Boto3",
      "SNS",
      "S3",
      "CloudWatch",
      "Terraform",
    ],
    repoUrl: "https://github.com/im-my-tea/serverless-cost-sentinel",
  },
  {
    slug: "microservice-delivery-pipeline",
    name: "Microservice CI/CD Delivery Pipeline — Promotion + Manual Gates",
    description:
      "Full environment promotion pipeline: pytest → Docker build → ECR push → staging deploy (App Runner) → automated smoke tests → manual approval gate → production deploy. Security boundary enforced between dev branch (tests only, zero cloud credentials) and main branch (full deploy). Staging smoke tests hit /, /metrics endpoints asserting availability and correctness before promotion; staging deploy polls App Runner until RUNNING state before triggering tests. Production deploy job uses GitHub Actions environment: production, pausing for reviewer approval in GitHub UI before final deployment.",
    techStack: [
      "GitHub Actions",
      "Docker",
      "AWS ECR",
      "App Runner",
      "FastAPI",
      "pytest",
    ],
    repoUrl: "https://github.com/im-my-tea/microservice-delivery-pipeline",
  },
  {
    slug: "containerized-inference-api",
    name: "Containerized Inference API — Multi-Cloud Deployment",
    description:
      "Containerized a Python inference service (FastAPI + Pydantic-validated 30-feature input schema) with python:3.12-slim; multi-arch Docker build via buildx (Apple Silicon → AMD64) for live deployment on GCP Cloud Run. Migrated from Azure App Service — chose request-driven scale-to-zero over always-on PaaS for bursty, low-volume inference traffic. Original Azure deployment preserved in repo with screenshots for multi-cloud reference. Diagnosed a sklearn version-mismatch incident between training and serving environments by pinning all 7 direct dependencies — eliminated environment drift across local, CI, and Cloud Run runtimes.",
    techStack: [
      "GCP Cloud Run",
      "Artifact Registry",
      "Azure App Service",
      "Docker",
      "FastAPI",
    ],
    repoUrl: "https://github.com/im-my-tea/gcp-mlops-capstone",
    liveUrl:
      "https://breast-cancer-api-130979666829.us-central1.run.app/docs",
  },
];
