import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import PageTransition from './PageTransition';
import Reveal from './Reveal';

const About = () => {
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Chaitanya Deemed to be University",
            year: "Aug 2024 - Aug 2028",
            description: "Focus on Web Application Development, AI tools, and hands-on projects.",
            color: "text-blue-400",
            borderColor: "group-hover:border-blue-500/50"
        },
        {
            degree: "Intermediate in MPC",
            institution: "Narayana Junior College",
            year: "Jun 2022 - Jun 2024",
            description: "GPA: 8.72",
            color: "text-purple-400",
            borderColor: "group-hover:border-purple-500/50"
        }
    ];

    return (
        <PageTransition variant="slideUp">
            <section className="py-20 bg-transparent text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-12">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                                    About Me
                                </h2>
                            </Reveal>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Personal Info */}
                            <div className="space-y-8">
                                <Reveal>
                                    <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            I am an <span className="text-teal-400 font-semibold">Aspiring Software Developer</span> pursuing a degree in Computer Science & Engineering.
                                            I have hands-on experience in front-end web technologies and strong project management abilities.
                                        </p>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Equipped with a problem-solving mindset, adaptability, and a passion for building practical,
                                            user-focused, and innovative solutions. I bridge the gap between complex technology and real-world impact.
                                        </p>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Education Section */}
                            <div className="space-y-6">
                                <Reveal>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                        <GraduationCap className="text-teal-400" size={28} />
                                        Education
                                    </h3>
                                </Reveal>

                                <div className="grid gap-6">
                                    {education.map((edu, index) => (
                                        <Reveal width="100%" key={index}>
                                            <div className={`group bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg ${edu.borderColor}`}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                                        {edu.degree}
                                                    </h4>
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-gray-400 border border-slate-700 whitespace-nowrap">
                                                        {edu.year}
                                                    </span>
                                                </div>
                                                <p className={`${edu.color} font-medium mb-3`}>{edu.institution}</p>
                                                <p className="text-gray-400 text-sm">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default About;
