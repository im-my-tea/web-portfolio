import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Maiti — Cloud & Platform Engineer",
  description:
    "Portfolio of Ayush Maiti — Cloud & Platform Engineer specializing in AWS, GCP, Azure, Terraform, Kubernetes, and Python automation.",
  openGraph: {
    title: "Ayush Maiti — Cloud & Platform Engineer",
    description:
      "Cloud-native infrastructure, IaC, and reliable system design across AWS, GCP, and Azure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
