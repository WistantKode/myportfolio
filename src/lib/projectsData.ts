import { Project } from "./projet";
import { FaJava, FaReact } from "react-icons/fa";
import {
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiPostgresql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiFramework
} from "react-icons/si";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Chick Food",
    description: "Chick Food is a front-end project for a fictional fried\n" +
        "                            chicken restaurant. This fully responsive website provides\n" +
        "                            an engaging user experience with smooth animations and a\n" +
        "                            clean, modern design. It serves as a great portfolio\n" +
        "                            piece to showcase skills in HTML, CSS, and JavaScript. ",
    category: "web",
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "ScrollJS", icon: SiFramework },
    ],
    repogit: "https://github.com/your-username/your-repo",
    liveUrl: "https://your-live-project-url.com",
    imageUrl: "/public/projects img/projet1.png",
  },
  {
    id: "2",
    title: "Mon Deuxième Projet",
    description: "Elysian Drive is a front-end project showcasing electric cars. \n" +
        "                            This landing page offers a glimpse into the full website, which\n" +
        "                            features smooth animations and a futuristic design. It highlights\n" +
        "                            skills in HTML, CSS, and JavaScript, especially with animation and\n" +
        "                            interactive libraries.",
    category: "web",
    tech: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpring },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    repogit: "https://github.com/your-username/your-other-repo",
    liveUrl: "https://your-other-live-project-url.com",
    imageUrl: "/path/to/your/other-image.jpg",
  },
    {
        id: "2",
        title: "Mon Deuxième Projet",
        description: "Ceci est la description de mon deuxième projet.",
        category: "backend",
        tech: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpring },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
        repogit: "https://github.com/your-username/your-other-repo",
        liveUrl: "https://your-other-live-project-url.com",
        imageUrl: "/path/to/your/other-image.jpg",
    },
    {
        id: "3",
        title: "Mon Deuxième Projet",
        description: "Ceci est la description de mon deuxième projet.",
        category: "backend",
        tech: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpring },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
        repogit: "https://github.com/your-username/your-other-repo",
        liveUrl: "https://your-other-live-project-url.com",
        imageUrl: "/path/to/your/other-image.jpg",
    },
    {
        id: "2",
        title: "Mon Deuxième Projet",
        description: "Ceci est la description de mon deuxième projet.",
        category: "backend",
        tech: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpring },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
        repogit: "https://github.com/your-username/your-other-repo",
        liveUrl: "https://your-other-live-project-url.com",
        imageUrl: "/path/to/your/other-image.jpg",
    },
    {
        id: "2",
        title: "Mon Deuxième Projet",
        description: "Ceci est la description de mon deuxième projet.",
        category: "backend",
        tech: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpring },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
        repogit: "https://github.com/your-username/your-other-repo",
        liveUrl: "https://your-other-live-project-url.com",
        imageUrl: "/path/to/your/other-image.jpg",
    },
];
