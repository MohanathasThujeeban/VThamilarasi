import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import cab from "@/assets/images/dr-weerasinghe.png";
import dinesh from "@/assets/images/dinesh.jpeg";

const recommendations = [
  {
    name: "Dr. K. A. B. Weerasinghe",
    image: cab,
    designation:
      "Senior Lecturer · Civil & Structural Engineering · Institute of Technology, University of Moratuwa · buddhikaw@itum.mrt.ac.lk",
    meta: "Academic Referee · ITUM",
    text: "I have had the opportunity to teach and guide V. Thamilarasi during her studies in Civil Engineering at the Institute of Technology, University of Moratuwa. Throughout her academic work, she demonstrated a positive attitude towards learning, a willingness to take on new challenges, and a responsible approach to her studies.\n\nThrough modules including Strength of Materials, Surveying, Project Work, and Engineering Economics and Accounting, she developed a solid foundation in important areas of civil engineering. She showed particular interest in understanding practical applications and connecting academic knowledge with real-world engineering situations.\n\nHer project work also demonstrated her ability to approach tasks systematically, work with others, and communicate technical ideas effectively. She has shown good potential for continued development in civil engineering and construction-related fields.\n\nI am pleased to recommend V. Thamilarasi as a dedicated and motivated civil engineering student. I believe her willingness to learn, technical foundation, and commitment to professional development will support her well in future academic and career opportunities.",
  },

    {
    name: "Mr. Dinesh Liyanage",
    image: dinesh,
    designation: "Project Engineer · JAG Group (PVT) LTD | 076 938 9573 | dineshliyanage071@gmail.com",
    meta: "Professional Referee · Austville Residential Project",
    contact: "076 938 9573",
    text: "I had the opportunity to supervise and work with V. Thamilarasi during her training at the Austville residential development project. Throughout her time on site, she demonstrated a responsible attitude, willingness to learn, and genuine interest in understanding practical aspects of civil engineering and construction.\n\nDuring her training, she was involved in a 9-storey residential building project consisting of 22 apartments, a 2-level car park, and a rooftop terrace. The project included a piled foundation system and a reinforced concrete frame comprising columns, beams, and slabs.\n\nAs part of her responsibilities, she assisted with the preparation of Bills of Quantities (BOQ), including the measurement and quantification of concrete, blockwork, tiling, doors, sanitaryware, and other project materials according to specifications. She also supported the preparation of Interim Payment Certificates (IPC) by measuring completed work at different stages of construction to assist with contractor payment claims.\n\nShe was also involved in maintaining site documentation, including daily progress records, material delivery records, and inspection notes. In addition, she assisted with inventory management by monitoring materials such as imported porcelain tiles, solid timber doors, aluminium windows, and sanitary fittings used for the project.\n\nThroughout the training period, she showed good communication skills, attention to detail, and the ability to work responsibly with site personnel and project teams. She was willing to take guidance, understand construction processes, and apply her academic knowledge to practical site activities.\n\nI am pleased to recommend V. Thamilarasi as a motivated and responsible civil engineering trainee. Her practical exposure to quantity measurement, BOQ preparation, IPC support, site documentation, and material management has provided her with a valuable foundation for her future career in construction and civil engineering.",
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