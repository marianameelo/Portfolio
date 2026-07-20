import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";
import About from "@/sections/About";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
