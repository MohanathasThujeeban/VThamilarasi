import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, ChevronDown } from "lucide-react";
import headshot from "@/assets/headshot.png";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                MASc · P.Eng. Candidate (PEGNL)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              <span className="text-foreground">Civil · Structural</span>
              <br />
              <span className="text-gradient">Safety · Quality</span>
              <br />
              <span className="text-foreground">Engineering</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Multi-disciplinary engineering across infrastructure, buildings,
              and industrial systems. Risk-aware design,
              construction-to-compliance lifecycle, aligned with Canadian codes
              and international standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("#projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide"
              >
                <ArrowDown className="h-4 w-4 mr-2" />
                View Projects
              </Button>
              <Button
                onClick={() => scrollTo("#services")}
                variant="outline"
                className="rounded-sm px-8 py-3.5 h-auto border-border text-foreground hover:bg-muted hover:text-foreground text-sm font-semibold tracking-wide"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Services
              </Button>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-14 pt-8 border-t border-border/50">
              {[
                { value: "14+", label: "Projects" },
                { value: "6+", label: "Sectors" },
                { value: "3", label: "Degrees" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[420px] overflow-hidden rounded-sm glass-strong">
                <img
                  src={headshot}
                  alt="V. Thamilarasi — Civil, Structural, Safety & Quality Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-60 sm:w-72 md:w-80 h-72 sm:h-80 md:h-[420px] border border-primary/30 rounded-sm -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#tools")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
