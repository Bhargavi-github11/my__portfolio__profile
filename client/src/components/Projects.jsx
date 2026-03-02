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
        },
        {
            title: "FrameFlix",
            description: "A movie ticket booking application.",
            tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
            link: "https://frameflix-rose.vercel.app/",
            type: "Web Development"
        },
        {
            title: "SpotiCone",
            description: "A Spotify clone application for streaming latest music.",
            tech: ["React", "Web Development"],
            link: "https://spoti-clone-chi.vercel.app/",
            type: "Web Development"
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white outfit-font tracking-tight">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Projects</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    <div className="p-8 flex-1 flex flex-col relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <motion.div
                                                className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-teal-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:bg-teal-500/10 transition-colors duration-300"
                                                whileHover={{ rotate: 5, scale: 1.1 }}
                                            >
                                                <Folder size={28} strokeWidth={1.5} />
                                            </motion.div>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                                            >
                                                <ExternalLink size={22} strokeWidth={1.5} />
                                            </a>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors outfit-font tracking-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-300/80 text-base leading-relaxed mb-6 flex-1 font-light">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-teal-200 border border-white/10 backdrop-blur-sm"
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
