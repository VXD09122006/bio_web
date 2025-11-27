import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PublicationsSection() {
  const publications = [];

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