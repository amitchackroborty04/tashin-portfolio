
import { ContactForm } from "@/components/web/Contact";
import { Hero } from "@/components/web/Hero";
import { Navbar } from "@/components/web/Navbar";
import { Projects } from "@/components/web/Projects";
import { Skills } from "@/components/web/Skills";
import { WorkExperience } from "@/components/web/WorkExperience";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#11071F] overflow-x-hidden">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Skills />
      <Projects />
      <ContactForm />
      <footer />
    </main>
  )
}
