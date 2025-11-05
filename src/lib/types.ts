import {IconName} from "./icons"; // Import our new IconName type

// === Types for Projects ===
export const projectCategories = ["all", "web", "backend", "mobile"] as const;
export type ProjectCategory = typeof projectCategories[number];

export interface TechLink {
    name: string;
    icon: IconName; // Use the string-based icon name
}

export interface Project {
    id: string; // Unique identifier (UUID)
    title: string;
    description: string;
    category: ProjectCategory;
    repoGit?: string; // Renamed for clarity and consistency
    liveUrl?: string;
    tech: TechLink[]; // Use TechLink for project technologies
    imageUrl?: string;
}

// === Types for Technical Stack ===
export interface Technology {
    id: string; // Unique identifier (UUID)
    name: string;
    icon: IconName; // Use the string-based icon name
    color: string;
    size?: 'small' | 'medium' | 'large';
}

// === Types for Blog Posts ===
export interface BlogPost {
    id: string; // Unique identifier (UUID)
    title: string;
    excerpt: string;
    content: string; // Full HTML content or markdown
    category: string;
    author: string;
    publishedAt: string; // ISO date string for easier serialization
    image?: string; // Optional URL to the main image
    tags: string[];
    readingTime?: number; // Estimated reading time in minutes
}

// === Types for Experience Items ===
export interface ExperienceItem {
    id: string; // Unique identifier (UUID)
    title: string;
    institution: string;
    date: string; // e.g., "June 2025 - Sept. 2025" or "2023 - 2025"
    description: string;
}

// === Global Type for all Portfolio Data ===
export interface PortfolioData {
    projects: Project[];
    technologies: Technology[];
    blogPosts: BlogPost[]; // Added blog posts
    professionalExperiences: ExperienceItem[];
    academicBackground: ExperienceItem[];
    // Future: services, contact info, etc.
}
