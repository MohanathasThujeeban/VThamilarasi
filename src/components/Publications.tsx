import { ScrollReveal } from "@/components/ScrollReveal";
import { BookOpen } from "lucide-react";



export function Publications() {
  return (
    <section id="publications" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Publications
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Journal Article Reviews
          </h2>
        </ScrollReveal>

        
      </div>
    </section>
  );
}
