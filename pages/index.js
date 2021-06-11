import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import ProjectSection from "../components/ProjectSection";
import SectionSkills from "../components/SectionSkills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
