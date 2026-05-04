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
  title: "Alassane CISSE | Data Scientist · Software Engineer · DevOps",
  description: "Portfolio of Alassane CISSE — Data Scientist, Data Engineer, Full-Stack Software Developer, and DevOps Engineer based in Côte d'Ivoire. 5+ years building data pipelines, ML solutions, and scalable applications.",
  keywords: ["Alassane CISSE", "Data Scientist", "Data Engineer", "Software Developer", "DevOps", "Machine Learning", "Python", "Next.js", "React"],
  authors: [{ name: "Alassane CISSE", url: "mailto:grencisse@gmail.com" }],
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
