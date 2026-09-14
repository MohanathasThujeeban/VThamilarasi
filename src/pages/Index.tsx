import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ToolsSlider } from "@/components/ToolsSlider";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { Services } from "@/components/Services";
import { CodesStandards } from "@/components/CodesStandards";
import { Clients } from "@/components/Clients";
import { Recommendations } from "@/components/Recommendations";
import { Publications } from "@/components/Publications";
import { Honors } from "@/components/Honors";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { CinematicVideo } from "@/components/CinematicVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Cursor-Controlled & Scroll-Scrubbed Video Background Engine */}
      <CinematicVideo />


      <div className="relative z-10">
        <Header />
        <Hero />
        <ToolsSlider />
        <ProjectsGrid />
        <ExpertiseAreas />
        <Services />
        <CodesStandards />
        <Clients />
        <Recommendations />
        <Publications />
        <Honors />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
