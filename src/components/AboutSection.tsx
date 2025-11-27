import { Badge } from "./ui/badge";

export function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="mb-6">About Me</h2>
      <div className="prose prose-gray max-w-none">
        <p>
          Tôi là một nhà nghiên cứu chuyên về các lĩnh vực khoa học máy tính và trí tuệ nhân tạo. 
          Với niềm đam mê học hỏi và khám phá, tôi luôn tìm kiếm những giải pháp sáng tạo cho 
          các vấn đề phức tạp trong thế giới thực.
        </p>
        <p>
          Nghiên cứu của tôi tập trung vào việc phát triển các hệ thống thông minh có khả năng 
          học hỏi và thích ứng với môi trường thay đổi. Tôi tin rằng công nghệ có thể tạo ra 
          những tác động tích cực đến xã hội khi được ứng dụng đúng cách.
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
    "Reinforcement Learning"
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
