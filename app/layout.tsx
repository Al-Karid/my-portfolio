import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://me.revalys.com"),
  title: "Alassane CISSE | Data Scientist · Software Engineer · DevOps | Portfolio",
  description: "Experienced Data Scientist, Data Engineer, Full-Stack Software Developer, and DevOps Engineer with 5+ years of expertise. Specialized in machine learning, data pipelines, cloud infrastructure, and scalable application development. Available for remote opportunities.",
  keywords: [
    "Alassane CISSE",
    "Data Scientist",
    "Data Engineer",
    "Software Developer",
    "DevOps Engineer",
    "MLOps",
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "RAG",
    "LLM",
    "LlamaIndex",
    "Python",
    "Next.js",
    "React",
    "React Native",
    "Nuxt.js",
    "Cloud Architecture",
    "AWS",
    "Docker",
    "Kubernetes",
    "ETL",
    "Data Pipeline",
    "Analytics",
    "Power BI",
    "SQL",
    "CI/CD",
    "Full-stack Developer",
    "Côte d'Ivoire",
    "Abidjan",
  ],
  authors: [{ name: "Alassane CISSE", url: "mailto:grencisse@gmail.com" }],
  creator: "Alassane CISSE",
  category: "Portfolio",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://me.revalys.com",
    title: "Alassane CISSE | Data Scientist · Software Engineer · DevOps",
    description: "Portfolio of an experienced Data Scientist, Engineer, and DevOps specialist with proven expertise in machine learning, cloud infrastructure, and scalable applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alassane CISSE - Portfolio",
      },
    ],
    siteName: "Alassane CISSE - Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alassane CISSE | Data Scientist · Software Engineer · DevOps",
    description: "Experienced Data Scientist, Engineer, and DevOps specialist. 5+ years building ML solutions, data pipelines, and scalable systems.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://me.revalys.com",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
