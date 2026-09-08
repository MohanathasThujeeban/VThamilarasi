import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Footer({ hideCTA = false }: { hideCTA?: boolean } = {}) {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      {!hideCTA && (
      <div className="section-padding bg-card relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Let&apos;s Connect
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto text-foreground">
              Interested in engineering collaboration, project review, or
              technical consultation?
            </h2>
            <div className="mt-8">
              <a href="mailto:vmoorthy190@gmail.com">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide">
                  Start a Conversation
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      )}

      {/* Bottom bar */}
      <div className="bg-background border-t border-border/50">
        <div className="section-container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:vmoorthy190@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                vmoorthy190@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/thamilarasi-vinayakamoorthi-75299828b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Colombo 06, Sri Lanka
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} V.Thamilarasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
