import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
