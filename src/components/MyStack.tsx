import React from 'react';
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { 
    SiGit, SiGithub, SiTypescript, SiNestjs, SiMicrogenetics, 
    SiPostgresql, SiTrello, SiSpringboot, SiReact, SiJavascript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

// --- Data Configuration --- //
// La logique de typage et de scalabilité que vous aimez est conservée.
// Il suffit d'ajouter un objet à ce tableau pour qu'une nouvelle compétence apparaisse.
interface Technology {
    name: string;
    icon: IconType;
    color: string;
    size?: 'small' | 'medium' | 'large'; // Pour varier la taille des cartes
}

const technologies: Technology[] = [
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", size: 'large' },
    { name: "React", icon: SiReact, color: "#61DAFB", size: 'large' },
    { name: "Java", icon: SiJavascript, color: "#ED8B00", size: 'medium' },
    { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF", size: 'medium' },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Microservices", icon: SiMicrogenetics, color: "#FF6B6B" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Trello", icon: SiTrello, color: "#0079BF" },
];
// --- End Data Configuration --- //

// --- Animation Variants --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const MyStack = () => {
    return (
        <div className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3"
                    >
                        My Technical Stack
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-text-secondary text-lg title1 max-w-3xl mx-auto"
                    >
                        Une collection d'outils et de technologies que j'utilise pour construire des applications modernes et performantes.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto"
                >
                    {technologies.map((tech) => {
                        const IconComponent = tech.icon;
                        const sizeClasses = {
                            small: 'p-4',
                            medium: 'p-6 md:p-8',
                            large: 'p-8 md:p-10'
                        };

                        return (
                            <motion.div
                                key={tech.name}
                                // @ts-ignore
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className={`bg-gradient-card border border-border-light rounded-xl text-center shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer ${sizeClasses[tech.size || 'small']}`}
                            >
                                <IconComponent 
                                    className="mx-auto mb-2 transition-colors duration-300" 
                                    size={tech.size === 'large' ? 48 : tech.size === 'medium' ? 36 : 28} 
                                    style={{ color: tech.color }}
                                />
                                <p className="text-text-primary text-sm font-medium whitespace-nowrap">
                                    {tech.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default MyStack;
