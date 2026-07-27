import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBar from "@/components/TechBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import LuxBackground from "@/components/LuxBackground";
import AICopilot from "@/components/AICopilot";

export default function Home() {
  return (
    <main className="relative bg-[#09090B] min-h-screen text-white overflow-hidden selection:bg-[#F4B75E] selection:text-[#09090B]">
      <LuxBackground />
      <Navbar />
      <Hero />
      <TechBar />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Certifications />
      <TestimonialsSection />
      <ContactBanner />
      <Footer />
      <AICopilot />
    </main>
  );
}
