import gJagGroup from "@/assets/projects/gallery/jaggroup.jpeg";
import fAustville01 from "@/assets/projects/featured/01.jpeg";
import fAustville02 from "@/assets/projects/featured/02.jpeg";
import fAustville03 from "@/assets/projects/featured/03.jpeg";

export interface ProjectAssets {
  featured: string;
  gallery: string[];
}

export const projectAssets: Record<string, ProjectAssets> = {
  "Austville": {
    featured: gJagGroup,
    gallery: [fAustville01, fAustville02, fAustville03],
  },
};
