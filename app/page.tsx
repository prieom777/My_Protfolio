import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
