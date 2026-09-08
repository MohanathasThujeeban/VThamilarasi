import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Building2, Layers, Ruler, ShieldAlert, ClipboardCheck, ChevronRight } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Civil Engineering & Construction",
    description:
      "Practical knowledge of civil engineering principles, construction methods, and site activities from planning through project completion.",
    bullets: [
      "Site investigation & preparation",
      "Construction methods & practices",
      "Earthworks & site development",
      "Drainage & basic infrastructure",
      "Construction project coordination",
    ],
  },

  {
    icon: Layers,
    title: "Structural & RCC Systems",
    description:
      "Understanding of reinforced concrete structures, structural components, construction detailing, and interpretation of engineering drawings.",
    bullets: [
      "Reinforced concrete construction",
      "Beam, column & slab systems",
      "Reinforcement detailing",
      "Structural drawing interpretation",
      "Concrete & formwork inspection",
    ],
  },

  {
    icon: Ruler,
    title: "Surveying & Quantity Estimation",
    description:
      "Application of surveying techniques and quantity measurement for construction planning and project execution.",
    bullets: [
      "Land surveying & leveling",
      "Setting out & measurements",
      "Quantity take-offs",
      "BOQ preparation",
      "Material estimation",
    ],
  },

  {
    icon: ClipboardCheck,
    title: "Quality, Safety & Project Management",
    description:
      "Supporting construction quality, site safety, documentation, and project coordination in accordance with applicable Sri Lankan practices and standards.",
    bullets: [
      "Construction QA/QC",
      "Material & work inspections",
      "Site safety practices",
      "Progress monitoring & documentation",
      "CIDA specifications & SLS standards",
    ],
  },
];

export function ExpertiseAreas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = areas[activeIndex];

  return (
    <section id="expertise" className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Disciplines
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Core Expertise
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-[320px_1fr] gap-8">
            {/* Left: Tab navigation */}
            <div className="flex flex-col gap-2">
              {areas.map((area, i) => (
                <button
                  key={area.title}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 p-4 rounded-sm text-left transition-all border ${i === activeIndex
                      ? "glass-strong border-primary/50 shadow-lg shadow-primary/5"
                      : "border-transparent hover:glass hover:border-border/50"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${i === activeIndex
                        ? "bg-primary/20"
                        : "bg-muted"
                      }`}
                  >
                    <area.icon
                      className={`h-5 w-5 transition-colors ${i === activeIndex ? "text-primary" : "text-muted-foreground"
                        }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm transition-colors ${i === activeIndex ? "text-foreground" : "text-muted-foreground"
                        }`}
                    >
                      {area.title}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-all ${i === activeIndex
                        ? "text-primary opacity-100"
                        : "text-muted-foreground/30 opacity-0"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Right: Detail panel */}
            <div className="glass-strong rounded-sm p-5 sm:p-8 md:p-10 relative overflow-hidden animate-fade-in" key={activeIndex}>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/20 pointer-events-none" />

              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <active.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl sm:text-2xl">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {active.description}
              </p>

              <div className="glow-line mb-8" />

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {active.bullets.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
