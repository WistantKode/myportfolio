// src/components/MyStack.tsx
import React from 'react';
import {motion} from 'framer-motion';
import {Progress} from '@/components/ui/progress';
import {technologies} from '@/lib/skillsdata.ts';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {opacity: 1, transition: {staggerChildren: 0.12, delayChildren: 0.2}}
};

const MyStack = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{opacity: 0, y: -15}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-text-primary mb-3 title3"
                    >
                        My Technical Stack
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 15}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-text-secondary text-base title1 max-w-2xl mx-auto"
                    >
                        A curated collection of tools and technologies I leverage to build modern, high-performance, and
                        secure applications.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto"
                >
                    {technologies.map((tech) => {
                        const IconComponent = tech.icon;

                        return (
                            <motion.div
                                key={tech.name}
                                animate={tech.animate}
                                transition={tech.transition}
                                whileHover={{scale: 1.1, zIndex: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.25)'}}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center bg-gradient-to-tr from-gray-900 via-gray-850 to-gray-900 border border-border-light rounded-xl shadow-md p-4 w-28 cursor-pointer hover:from-primary hover:to-secondary transition-all duration-300"
                            >
                                <div
                                    className="bg-background rounded-full p-2 mb-2 flex items-center justify-center w-12 h-12">
                                    <IconComponent size={24} style={{color: tech.color}} title={tech.name}/>
                                </div>
                                <h3 className="text-text-primary font-semibold text-xs mb-1">{tech.name}</h3>
                                <Progress value={tech.proficiency}
                                          className="h-1.5 w-full rounded-full mb-1 bg-gray-700"
                                          indicatorColor="bg-primary"/>
                                <span className="text-text-secondary text-[10px] font-medium">{tech.proficiency}%</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default MyStack;
