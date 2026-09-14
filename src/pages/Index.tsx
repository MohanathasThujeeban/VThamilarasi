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
import siteBg from "@/assets/site-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Architectural background */}
      <div className="fixed inset-0 z-0">
        <img
          src={siteBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>


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
