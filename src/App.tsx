import { ResearcherHeader } from "./components/ResearcherHeader";
import { AboutSection, ResearchInterests } from "./components/AboutSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <ResearcherHeader />
      <main>
        <AboutSection />
        <ResearchInterests />
        <PublicationsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <footer className="border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Vương Xuân Dũng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
