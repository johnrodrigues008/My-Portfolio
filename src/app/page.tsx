import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TrajectorySection } from "@/components/sections/TrajectorySection";
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TrajectorySection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
