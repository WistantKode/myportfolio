import {IconType} from "react-icons";
import {
    SiCss3,
    SiFramework,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiMicrogenetics,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiSpringboot,
    SiTrello,
    SiTypescript
} from "react-icons/si";

// Central dictionary of icons
// The key (e.g., 'react') is what will be saved in data.
// The value (e.g., FaReact) is the actual icon component.
export const ICONS = {
    react: SiReact,
    springboot: SiSpringboot,
    java: SiJava,
    nextjs: SiNextdotjs, // Using SiNextdotjs for consistency
    typescript: SiTypescript,
    git: SiGit,
    github: SiGithub,
    nestjs: SiNestjs,
    microservices: SiMicrogenetics,
    postgres: SiPostgresql,
    trello: SiTrello,
    html: SiHtml5,
    css: SiCss3,
    javascript: SiJavascript,
    scrolljs: SiFramework, // Assuming SiFramework is for ScrollJS or similar
} as const; // Crucial for strict typing

// Derived type that only allows keys from our dictionary
export type IconName = keyof typeof ICONS;

// Helper to get an icon component by its name
export const getIconComponent = (iconName: IconName): IconType => {
    return ICONS[iconName];
};
