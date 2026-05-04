import Script from "next/script";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alassane CISSE",
    url: "https://alassane-cisse.com",
    image: "https://alassane-cisse.com/me.jpeg",
    jobTitle: "Data Scientist | Software Engineer | DevOps Engineer",
    email: "grencisse@gmail.com",
    telephone: "+2250757947428",
    location: {
      "@type": "Place",
      name: "Abidjan, Côte d'Ivoire",
    },
    sameAs: [
      "https://linkedin.com/in/alassane-cisse",
      "https://github.com/alassane-cisse",
    ],
    description: "Experienced Data Scientist, Software Engineer, and DevOps Engineer with expertise in ML, data pipelines, and cloud infrastructure.",
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Data Engineering",
      "Python",
      "Next.js",
      "DevOps",
      "Cloud Architecture",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <Nav />
      <main>
        <Hero />
        <div className="section-divider max-w-6xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-6xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-6xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-6xl mx-auto" />
        <Education />
        <div className="section-divider max-w-6xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
