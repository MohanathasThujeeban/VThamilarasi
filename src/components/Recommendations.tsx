import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import cab from "@/assets/images/dr-weerasinghe.png";

const recommendations = [
  {
    name: "Dr. K. A. B. Weerasinghe",
    image: cab,
    designation:
      "Senior Lecturer · Civil & Structural Engineering · Institute of Technology, University of Moratuwa",
    meta: "Academic Referee · ITUM",
    text: "I have had the opportunity to teach and guide V. Thamilarasi during her studies in Civil Engineering at the Institute of Technology, University of Moratuwa. Throughout her academic work, she demonstrated a positive attitude towards learning, a willingness to take on new challenges, and a responsible approach to her studies.\n\nThrough modules including Strength of Materials, Surveying, Project Work, and Engineering Economics and Accounting, she developed a solid foundation in important areas of civil engineering. She showed particular interest in understanding practical applications and connecting academic knowledge with real-world engineering situations.\n\nHer project work also demonstrated her ability to approach tasks systematically, work with others, and communicate technical ideas effectively. She has shown good potential for continued development in civil engineering and construction-related fields.\n\nI am pleased to recommend V. Thamilarasi as a dedicated and motivated civil engineering student. I believe her willingness to learn, technical foundation, and commitment to professional development will support her well in future academic and career opportunities.",
  },
];

export function Recommendations() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) =>
      c === 0 ? recommendations.length - 1 : c - 1
    );

  const next = () =>
    setCurrent((c) =>
      c === recommendations.length - 1 ? 0 : c + 1
    );

  const rec = recommendations[current];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />

            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              References
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Professional Recommendations
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-sm p-8 md:p-10 relative">
            {/* Quote Icon */}
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />

            <div className="pt-8">
              {/* Recommendation Text */}
              <div className="text-foreground/80 leading-relaxed mb-6 italic space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {rec.text.split("\n\n").map((para, i) => (
                  <p key={i}>&ldquo;{para}&rdquo;</p>
                ))}
              </div>

              {/* Referee Profile */}
              <div className="border-t border-border/50 pt-6">
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/30"
                    />
                  </div>

                  {/* Referee Details */}
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-base md:text-lg">
                      {rec.name}
                    </p>

                    <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                      {rec.designation}
                    </p>

                    {rec.meta && (
                      <p className="text-xs text-primary/70 font-mono mt-1">
                        {rec.meta}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-sm border-border hover:border-primary hover:text-primary"
              aria-label="Previous recommendation"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <span className="font-mono text-sm text-muted-foreground">
              {current + 1} / {recommendations.length}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-sm border-border hover:border-primary hover:text-primary"
              aria-label="Next recommendation"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}