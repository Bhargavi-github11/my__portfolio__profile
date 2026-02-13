import React from 'react';
import { motion } from 'framer-motion';

import PageTransition from './PageTransition';

const Skills = () => {
    const skills = {
        "Frontend": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "REST API", "Python"],
        "Database": ["MongoDB", "SQL", "SQLite"],
        "AI": ["n8n Workflow Automation", "Prompt Engineering", "OpenAI API"],
        "Tools & Others": ["Git", "GitHub", "Postman", "VS Code", "Project Management", "Problem Solving"]
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Skills</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(skills).map(([category, items], index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-4 text-teal-400 border-b border-slate-700 pb-2">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-200 hover:bg-teal-500/20 hover:text-teal-300 transition-colors cursor-default"
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
