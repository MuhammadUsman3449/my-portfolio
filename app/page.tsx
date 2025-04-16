import Aboute from "@/components/aboute";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDevider />
      <Aboute />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
