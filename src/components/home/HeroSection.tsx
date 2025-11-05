import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- Data Configuration --- //
interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
}

interface ActionButton {
    text: string;
    url: string;
    variant: 'default' | 'outline';
    icon?: React.ElementType;
    downloadName?: string; // Changed from isDownload to downloadName for clarity and correctness
}

const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/wistantkode", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wistantkode", icon: Linkedin },
    { name: "WhatsApp", url: "https://wa.me/+237697135341", icon: FaWhatsapp },
    { name: "Email", url: "mailto:wistantkode@protonmail.com", icon: Mail },
];

const actionButtons: ActionButton[] = [
    { text: "Me Contacter", url: "https://wa.me/+237697135341", variant: 'default', icon: ArrowRight },
    { text: "Voir mon CV", url: "/cv/cv - wistant.pdf", variant: 'outline', icon: Download, downloadName: "CV-Wistant-Kode.pdf" },
];

// --- Animation Variants --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

// --- Main Component --- //
const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
            {/* Fond décoratif moderne */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary-glow/5 blur-3xl rounded-full animate-float"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.p variants={itemVariants} className="text-lg font-medium text-primary mb-2 title1">
                        Wistant Kode
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tighter mb-6 title3">
                        Développeur Backend & Web
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 title2">
                        Je transforme  des idées complexes en solutions logicielles robustes et évolutives, avec une expertise en Java/Spring et React/Next.js.
                    </motion.p>

                    {/* Boutons d'action */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        {actionButtons.map((btn) => (
                            <Button key={btn.text} asChild size="lg" variant={btn.variant} className={`group ${btn.variant === 'default' ? 'bg-gradient-primary border-0 shadow-primary hover:shadow-glow' : 'border-border-light hover:border-primary hover:bg-primary/10'}`}>
                                <a 
                                    href={btn.url} 
                                    // Correctly handle the download attribute
                                    {...(btn.downloadName && { download: btn.downloadName })}
                                    target={btn.downloadName ? undefined : "_blank"} 
                                    rel="noopener noreferrer"
                                >
                                    {btn.text}
                                    {btn.icon && <btn.icon className={`ml-2 w-5 h-5 transition-transform ${btn.variant === 'default' ? 'group-hover:translate-x-1' : 'group-hover:scale-110'}`} />}
                                </a>
                            </Button>
                        ))}
                    </motion.div>

                    {/* Liens sociaux */}
                    <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-text-muted hover:text-primary transition-colors">
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
