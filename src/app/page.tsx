import { HeroSection } from '@/components/HeroSection';
import { ProjectSection } from '@/components/ProjectSection'
import { SkillsSection } from "@/components/skillsSection";
import { AboutSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </>
  );
}
