import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
}
