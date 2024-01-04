import { HeroSection } from '@/components/HeroSection';
import { ProjectSection } from '@/components/ProjectSection'
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </>
  );
}
