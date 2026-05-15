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
    metadataBase: new URL("https://web-portfolio-one-ivory.vercel.app"),
    title: "Ayush Maiti — Cloud & Platform Engineer",
    description:
        "Cloud & Platform Engineer with ~3 years across product delivery and infrastructure work. Production services on AWS and GCP — FastAPI on Cloud Run, Terraform multi-environment infra, GitHub Actions CI/CD with promotion gates.",
    openGraph: {
        title: "Ayush Maiti — Cloud & Platform Engineer",
        description:
            "Production cloud infrastructure on AWS and GCP. Every project deployed, public, and walk-through-able end to end.",
        url: "https://web-portfolio-one-ivory.vercel.app",
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
