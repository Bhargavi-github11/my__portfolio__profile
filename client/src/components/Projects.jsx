import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import PageTransition from './PageTransition';

const Projects = () => {
    const projects = [
        {
            title: "BambooBhoomi",
            description: "A fully responsive website for a Bamboo Nursery with a modern green-themed aesthetic. Features smooth animations, parallax effects, interactive farmer profiles, and a functional contact system.",
            tech: ["MERN Stack", "React", "Node.js", "Tailwind CSS"],
            link: "https://bamboo-bloom-digital.vercel.app/",
            type: "Web Development"
        },
        {
            title: "Project Charter",
            description: "A comprehensive roadmap outlining project goals, stakeholders, and success metrics. Ensures organizational alignment and prevents scope creep.",
            tech: ["Project Management", "Strategic Planning"],
            link: "https://1drv.ms/p/c/8222116dd1e18764/EesjKWYo8FhNpxg7pBMdCY4BmwG-aO9LhWxpM7PqtfwJHg?e=E90LMr",
            type: "Project Management"
        },
        {
            title: "WBS (Work Breakdown Structure)",
            description: "End-to-end planning for a secure corporate messenger project. Detailed breakdown of the full scope into manageable sections.",
            tech: ["Project Management", "Planning"],
            link: "https://1drv.ms/p/c/8222116dd1e18764/EUS5vK0oIddBlh7vDGWfwXkBAFSeHCtnp-4mrC4dmPV56A?e=ODcU37",
            type: "Project Management"
        }
    ];

    return (
        <PageTransition variant="scale">
            <section className="py-20 bg-transparent text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Projects</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-slate-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-teal-500/50 transition-all duration-300 flex flex-col shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="p-6 flex-1 flex flex-col relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 bg-slate-800 rounded-lg text-teal-400">
                                                <Folder size={24} />
                                            </div>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 flex-1">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-teal-300 border border-slate-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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

export default Projects;
