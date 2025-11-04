import { Project } from "./projet";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Mon Premier Projet",
    description: "Ceci est la description de mon premier projet.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    repogit: "https://github.com/your-username/your-repo",
    imageUrl: "/path/to/your/image.jpg",
  },
  {
    id: "2",
    title: "Mon Deuxième Projet",
    description: "Ceci est la description de mon deuxième projet.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    repogit: "https://github.com/your-username/your-other-repo",
    imageUrl: "/path/to/your/other-image.jpg",
  },
];
