import { Badge } from "./ui/badge";

export function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="mb-6">About Me</h2>
      <div className="prose prose-gray max-w-none">
        <p>
          I am a student currently studying computer engineering. With a passion
          for learning and discovery, I am always looking for innovative
          solutions to complex real-world problems.
        </p>
        <p>
          I am currently researching the topic of Emergent models in clinical
          neuroscience. I believe that technology can create positive impacts on
          society when applied properly.
        </p>
      </div>
    </section>
  );
}

export function ResearchInterests() {
  const interests = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Artificial Intelligence",
    "Data Science",
    "Neural Networks",
    "Reinforcement Learning",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="mb-6">Research Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <Badge key={interest} variant="secondary" className="px-4 py-2">
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  );
}
