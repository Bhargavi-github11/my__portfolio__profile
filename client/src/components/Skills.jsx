import React from 'react';
import { motion } from 'framer-motion';

import PageTransition from './PageTransition';

const Skills = () => {
    const skills = {
        "Frontend": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "REST API", "Python"],
        "Database": ["MongoDB", "SQL", "SQLite"],
        "AI": ["n8n Workflow Automation", "Prompt Engineering", "OpenAI API"],
        "Tools & Others": ["Git", "GitHub", "Postman", "VS Code", "Project Management", "Problem Solving", "Vercel"]
    };

    return (
        <PageTransition variant="rotate">
            <section className="py-20 bg-transparent text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white outfit-font tracking-tight">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Skills</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(skills).map(([category, items], index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                    className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group h-full flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500 pointer-events-none"></div>
                                    <h3 className="text-2xl font-bold mb-6 text-white outfit-font border-b border-white/10 pb-4 relative z-10">
                                        <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">{category}</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5 relative z-10">
                                        {items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full text-sm font-medium text-slate-300 hover:text-teal-200 hover:bg-teal-500/20 hover:border-teal-400/30 transition-all duration-300 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Skills;
