import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Ruler,
  ShieldAlert,
  ClipboardCheck,
  HardHat,
  FileText,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Structural Drawing & Design Support",
    problem: "Accurate structural drawings are essential for safe and efficient construction.",
    value: "Support in preparing, reviewing, and interpreting structural drawings and basic engineering details.",
    deliverables: "Structural drawings, design details, drawing markups",
  },

  {
    icon: HardHat,
    title: "Construction Site Support",
    problem: "Construction projects require proper technical coordination and site supervision.",
    value: "Technical support for site activities, construction methods, material usage, and coordination with project teams.",
    deliverables: "Site reports, work inspections, technical recommendations",
  },

  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspection",
    problem: "Poor-quality construction can lead to defects, delays, and additional costs.",
    value: "Inspection and monitoring of construction activities to ensure work follows drawings, specifications, and quality requirements.",
    deliverables: "Inspection reports, quality checklists, NCR records",
  },

  {
    icon: FileText,
    title: "Quantity Estimation & BOQ Support",
    problem: "Inaccurate quantities can result in material waste and budget overruns.",
    value: "Quantity take-offs, material estimation, and support in preparing Bills of Quantities for construction projects.",
    deliverables: "Quantity take-offs, BOQ, material estimates",
  },

  {
    icon: Ruler,
    title: "Land Surveying & Setting Out",
    problem: "Incorrect measurements and setting out can affect the accuracy of construction work.",
    value: "Support with surveying, leveling, measurements, and setting out for construction activities.",
    deliverables: "Survey records, level reports, setting-out data",
  },

  {
    icon: Settings,
    title: "Project Planning & Documentation",
    problem: "Poor planning and documentation can cause delays and coordination issues.",
    value: "Support with construction planning, progress tracking, technical documentation, and project coordination.",
    deliverables: "Progress reports, schedules, site documentation",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Consulting
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Engineering Services
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ScrollReveal key={svc.title}>
              <div className="glass rounded-sm p-6 h-full flex flex-col hover:border-primary/40 transition-all group">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-2">
                  {svc.problem}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {svc.value}
                </p>
                <div className="border-t border-border/50 pt-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">Deliverables:</span>{" "}
                    {svc.deliverables}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
