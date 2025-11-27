import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Undergraduate in Computer Engineering",
      institution: "Đại học Công nghệ, ĐHQGHN",
      period: "2024-?",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3>{edu.degree}</h3>
              <p className="text-muted-foreground mt-1">{edu.institution}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>
              <p className="mt-2 text-sm">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
