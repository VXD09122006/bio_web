import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experience = [
    {
      position: "Research Assistant",
      organization: "AI Research Lab, Đại học Quốc gia Hà Nội",
      period: "2021 - Hiện tại",
      description: "Conducting research on deep learning and natural language processing. Leading projects on neural machine translation and text generation."
    },
    {
      position: "Machine Learning Engineer",
      organization: "VinAI Research",
      period: "2020 - 2021",
      description: "Developed and deployed machine learning models for production systems. Worked on computer vision and NLP applications."
    },
    {
      position: "Research Intern",
      organization: "FPT AI Center",
      period: "2019 - 2020",
      description: "Collaborated on research projects in deep learning. Contributed to papers on image recognition and object detection."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="mb-6">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3>{exp.position}</h3>
              <p className="text-muted-foreground mt-1">{exp.organization}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
