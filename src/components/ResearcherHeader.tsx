import { Mail, Github, Linkedin, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ResearcherHeader() {
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjA5NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vương Xuân Dũng"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          
          <div className="flex-1">
            <h1>Vương Xuân Dũng</h1>
            <p className="text-muted-foreground mt-2">
              Researcher | PhD Candidate
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:vxdung@example.edu" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <BookOpen className="w-5 h-5" />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
