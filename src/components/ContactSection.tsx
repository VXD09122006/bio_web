import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="mb-6">Contact</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <a
              href="mailto:abc09122006@gmail.com"
              className="hover:text-primary transition-colors"
            >
              abc09122006@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <p>+84 0967060231</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p>Hà Nội, Việt Nam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
