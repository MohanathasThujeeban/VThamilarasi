import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ChevronLeft, ChevronRight, Sparkles, Play, Volume2, VolumeX } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

/* ----- Personal photos (bundled) ----- */
import heroSunset from "@/assets/sunset-ocean-hero.jpg";
import headshot from "@/assets/IMG_9519.jpeg";
import oceanBg from "@/assets/about/img_2721.jpeg";

const PH = {
  hero: heroSunset,
  portrait: headshot,
  ocean: oceanBg,
};

export interface Moment {
  emoji?: string;
  title: string;
  caption: string;
  img?: string;
  video?: string;
  poster?: string;
  withSound?: boolean;
}

export interface MosaicItem {
  src: string;
  alt: string;
}

const moments: Moment[] = [];

const passions = [
  { title: "Engineering", insight: "I've always been fascinated by how ideas become reality." },
  { title: "Creativity", insight: "Making space for ideas to breathe is its own discipline." },
  { title: "Photography", insight: "Photography teaches me to notice what others often overlook." },
  { title: "Travel", insight: "Every place I visit rewrites a small part of how I see the world." },
  { title: "Ocean Exploration", insight: "The coast is where I think most clearly." },
  { title: "Books", insight: "Every good book leaves me with a new perspective." },
  { title: "Music", insight: "A few chords can carry an entire memory." },
  { title: "Nature", insight: "Trails remind me that progress is just one steady step at a time." },
  { title: "Continuous Learning", insight: "Curiosity is the one habit I refuse to outgrow." },
];

const mosaic: MosaicItem[] = [];

const values = [
  { title: "Lifelong Learning", body: "Always exploring new ideas, skills, and perspectives." },
  { title: "Integrity", body: "Doing the right thing, even when nobody is watching." },
  { title: "Creativity", body: "Finding innovative ways to solve problems and express ideas." },
  { title: "Growth", body: "Believing that every experience has something to teach." },
];

export default function About() {
  useEffect(() => {
    document.title = "About — V.Thamilarasi | Beyond Engineering";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Beyond engineering — the person, passions, and curiosity of V.Thamilarasi : photography, music, travel, ocean, and a love for learning.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhoIAm />
        <LifeInMoments />
        <PhotoMosaic />
        <QuoteSection />
        <Values />
        <Closing />
      </main>
      <Footer hideCTA />
    </div>
  );
}

/* ---------------- SECTION 1: HERO ---------------- */
function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img src={PH.hero} alt="Thamilarasi — beyond engineering" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      <div className="relative z-10 h-full section-container flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              Explorer · Creator · Learner · Engineer
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]">
            Beyond
            <br />
            <span className="text-primary italic font-medium">Engineering.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Curiosity has always been at the center of everything I do, from building structures
            to exploring new places, learning new skills, and discovering new perspectives.
          </p>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-mono tracking-[0.3em] text-foreground/70 hover:text-primary transition-colors"
      >
        EXPLORE MY STORY
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

/* ---------------- SECTION 2: WHO I AM ---------------- */
function WhoIAm() {
  const paragraphs = [
    <>I'm <span className="text-primary">Thamilarasi</span>, a motivated and curious student with a strong interest in learning, developing new skills, and exploring new opportunities.</>,
    <>I believe that <span className="text-primary">education</span> is not only about gaining knowledge, but also about applying it to real-world situations and learning from every experience.</>,
    <>Throughout my academic journey, I’ve developed an interest in <span className="text-primary">problem-solving</span>, understanding how things work, and finding practical ways to turn ideas into meaningful results.</>,
    <>I enjoy taking on <span className="text-primary">new challenges</span> because they give me opportunities to learn, improve my skills, and grow both personally and academically.</>,
    <>
      Beyond academics, I value <span className="text-primary">creativity, teamwork, and continuous learning</span>. I believe that working with others and sharing ideas can lead to better results.
    </>,
    <>
      I’m always interested in <span className="text-primary">learning new concepts</span> and exploring different areas that can help me expand my knowledge and abilities.
    </>,
    <>
      I believe that every experience, whether it is a success or a challenge, provides an opportunity to <span className="text-primary">learn something valuable</span>.
    </>,
    <>
      As a student, my goal is to continuously develop my knowledge, strengthen my skills, and prepare myself for <span className="text-primary">future opportunities</span>.
    </>,
    <>
      I’m always open to new experiences and opportunities that allow me to <span className="text-primary">learn, collaborate, and contribute</span> in a meaningful way.
    </>,
    <>
      At the end of the day, it all comes back to <span className="text-primary font-medium">continuous growth</span>. I believe in staying curious, learning consistently, and becoming a better version of myself with every new experience.
    </>,
  ];

  return (
    <section id="story" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/40" />
              <img
                src={PH.portrait}
                alt="Thamilarasi portrait"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="relative w-full h-auto object-contain pointer-events-none select-none grayscale-[15%]"
              />
              <div className="mt-4 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                V.Thamilarasi, In Pursuit of Possibility
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Who I Am</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
                Hey, I’m <span className="italic text-primary">Thamilarasi</span>.
              </h2>
            </ScrollReveal>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/80">
              {paragraphs.map((p, i) => (
                <ScrollReveal key={i}>
                  <p className={i === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:font-medium first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}>
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3: LIFE IN MOMENTS ---------------- */
function LifeInMoments() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState<Record<number, boolean>>(
    () => Object.fromEntries(moments.map((_, i) => [i, true]))
  );

  const toggleMute = (idx: number) => {
    setMuted((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || moments.length === 0) return;
    const el = trackRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + el.clientWidth * 0.5;
      if (next >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.5, behavior: "smooth" });
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="py-16 md:py-20 bg-card/40 border-y border-border/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">03 — Moments</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
                Life in <span className="italic text-primary">Moments</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                A collection of experiences, passions, and memories that shape who I am.
              </p>
            </div>
            {moments.length > 0 && (
              <div className="flex gap-2">
                <button onClick={() => scroll(-1)} aria-label="Previous" className="w-12 h-12 border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => scroll(1)} aria-label="Next" className="w-12 h-12 border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {moments.length > 0 ? (
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {moments.map((m, i) => (
            <article
              key={i}
              className="group relative flex-shrink-0 w-[78vw] sm:w-[52vw] md:w-[360px] lg:w-[400px] aspect-[3/4] snap-start overflow-hidden bg-muted"
            >
              {"video" in m && m.video ? (
                <video
                  src={m.video}
                  poster={(m as any).poster}
                  autoPlay
                  muted={muted[i] !== false}
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={(m as any).img}
                  alt={m.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-[1200ms] group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="text-3xl mb-3">{m.emoji}</div>
                <h3 className="font-display text-2xl md:text-3xl font-medium">{m.title}</h3>
                <p className="mt-2 text-sm md:text-base text-foreground/75 max-w-sm">{m.caption}</p>
              </div>
              <span className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.25em] text-primary">{String(i + 1).padStart(2, "0")}</span>
              {"video" in m && m.video && (m as any).withSound && (
                <button
                  onClick={() => toggleMute(i)}
                  aria-label={muted[i] !== false ? "Unmute video" : "Mute video"}
                  className="absolute top-5 right-5 flex items-center gap-1.5 px-2 py-1 bg-background/70 backdrop-blur-sm border border-primary/40 hover:bg-background/90 transition-colors"
                >
                  {muted[i] !== false ? (
                    <VolumeX className="h-3 w-3 text-primary" />
                  ) : (
                    <Volume2 className="h-3 w-3 text-primary" />
                  )}
                  <span className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
                    {muted[i] !== false ? "Sound" : "On"}
                  </span>
                </button>
              )}
              {"video" in m && m.video && !(m as any).withSound && (
                <span className="absolute top-5 right-5 flex items-center gap-1.5 px-2 py-1 bg-background/70 backdrop-blur-sm border border-primary/40">
                  <Play className="h-3 w-3 text-primary fill-primary" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase">Video</span>
                </span>
              )}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/* ---------------- SECTION 4: PASSION WALL ---------------- */
function PassionWall() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">04 — Curiosity</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
              What Keeps Me <span className="italic text-primary">Curious</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {passions.map((p, i) => (
            <ScrollReveal key={p.title}>
              <div
                className="group relative h-44 md:h-56 border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ transform: `translateY(${(i % 3) * 12}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                      “{p.insight}”
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 5: PHOTO MOSAIC ---------------- */
function PhotoMosaic() {
  return (
    <section className="section-padding bg-card/40 border-y border-border/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">05 — Gallery</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
              Through My <span className="italic text-primary">Lens</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sketches, journeys, coastlines, and quiet pages — a visual record of where curiosity has taken me.
            </p>
          </div>
        </ScrollReveal>

        {mosaic.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
            {mosaic.map((m, i) => (
              <div
                key={i}
                className="group relative block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden bg-muted border border-border/40"
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ---------------- SECTION 6: QUOTE ---------------- */
function QuoteSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
      <img src={PH.ocean} alt="Ocean" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative section-container text-center">
        <ScrollReveal>
          <span className="font-display text-7xl md:text-8xl text-primary/40 leading-none">“</span>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-light leading-snug max-w-4xl mx-auto -mt-4">
            Curiosity is what led me to engineering, and it’s what continues to
            guide every <span className="italic text-primary">new journey</span>.
          </blockquote>
          <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            V.Thamilarasi
            <span className="h-px w-10 bg-primary" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7: VALUES ---------------- */
function Values() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">07 — Principles</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
              What Matters <span className="italic text-primary">To Me</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title}>
              <div className="group relative h-full border border-border bg-card/40 p-6 md:p-7 hover:border-primary transition-all duration-500">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-6">0{i + 1}</div>
                <h3 className="font-display text-xl md:text-2xl font-medium">{v.title}</h3>
                <div className="mt-4 h-px w-10 bg-primary/60 group-hover:w-full transition-all duration-700" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 8: CLOSING ---------------- */
function Closing() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="section-container relative text-center">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">— Until next time</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mt-4">
            Thanks for <span className="italic text-primary">stopping by</span>.
          </h2>
          <div className="mt-8 max-w-2xl mx-auto space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Engineering may be what I do professionally, but curiosity, creativity, and
              exploration are what drive me every day.
            </p>
            <p>
              Whether I’m working on a project, sketching a portrait, travelling somewhere new,
              learning guitar, hiking a trail, or watching the ocean from a coastline, I’m
              always looking for opportunities to learn, grow, and appreciate the world around me.
            </p>
          </div>
          <div className="mt-10">
            <Link to="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide">
                Let’s Connect →
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}