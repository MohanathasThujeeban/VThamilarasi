export interface Project {
  id: string;
  name: string;
  type: string;
  category: "professional" | "research";
  role: string;
  highlights: string[];
  tools: string[];
  image?: string;
  detail: {
    overview: string;
    scope: string;
    safety: string;
    codes: string[];
    methods: string;
    outcomes: string;
  };
}

export const projects: Project[] = [
  {
    id: "Austville",
    name: "Apartment Building in Austville",
    type: "Residential",
    category: "professional",
    role: "Assistant Civil Engineer",
    highlights: [
      "Assisted with structural and construction-related activities",
      "Supported reinforcement, formwork, and concrete work inspections",
      "Assisted with quantity measurements and material estimation",
      "Coordinated construction activities with project teams",
    ],
    tools: ["AutoCAD", "Excel", "MS Project"],

    detail: {
      overview:
        "Civil engineering and construction support for a Nine-storey apartment Building in Wellawatta.",

      scope:
        "Assistance with construction activities including reinforcement, formwork, concrete works, quantity measurements, site inspections, and technical documentation.",

      safety:
        "Application of construction site safety procedures, personal protective equipment requirements, and safe work practices.",

      codes: [
        "SLS Standards",
        "CIDA Specifications",
        "SLS EN 1990",
        "SLS EN 1991",
        "SLS EN 1992",
      ],

      methods:
        "Site inspections, drawing interpretation, quantity measurements, reinforcement checking, concrete work monitoring, and construction documentation.",

      outcomes:
        "Supported the project team in maintaining construction quality, monitoring site activities, and ensuring work was carried out in accordance with drawings, specifications, and applicable standards.",
    },
  },
];
