import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PublicationsSection() {
  const publications = [
    {
      title: "Advanced Methods in Deep Learning for Natural Language Understanding",
      authors: "Vương Xuân Dũng, Nguyễn Văn A, Trần Thị B",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2024",
      link: "#"
    },
    {
      title: "Efficient Neural Architecture Search for Computer Vision Tasks",
      authors: "Vương Xuân Dũng, Lê Văn C",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2023",
      link: "#"
    },
    {
      title: "Transfer Learning Approaches for Low-Resource Languages",
      authors: "Vương Xuân Dũng, Phạm Thị D, Hoàng Văn E",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2023",
      link: "#"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="mb-6">Selected Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-start justify-between gap-4">
                <span>{pub.title}</span>
                <a 
                  href={pub.link}
                  className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                  aria-label="View publication"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{pub.authors}</p>
              <p className="text-sm">
                <span className="italic">{pub.venue}</span>, {pub.year}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
