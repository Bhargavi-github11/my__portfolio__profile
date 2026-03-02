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
        },
        {
            degree: "Schooling",
            institution: "Narayana e-techno School",
            year: "2015 - 2021",
            description: "Completed secondary education.",
            color: "text-teal-400",
            borderColor: "group-hover:border-teal-500/50"
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
                        <div className="flex justify-center mb-16">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-bold text-center outfit-font tracking-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">About</span> Me
                                </h2>
                            </Reveal>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Personal Info */}
                            <div className="space-y-8">
                                <Reveal>
                                    <div className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 font-light relative z-10">
                                            I am an <span className="text-teal-400 font-medium tracking-wide">Aspiring Software Developer</span> pursuing a degree in Computer Science & Engineering.
                                            I have hands-on experience in front-end web technologies and strong project management abilities.
                                        </p>
                                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light relative z-10">
                                            Equipped with a problem-solving mindset, adaptability, and a passion for building practical,
                                            user-focused, and innovative solutions. I bridge the gap between complex technology and real-world impact.
                                        </p>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Education Section */}
                            <div className="space-y-8">
                                <Reveal>
                                    <h3 className="text-3xl font-bold flex items-center gap-3 text-white outfit-font">
                                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-teal-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                            <GraduationCap size={28} strokeWidth={1.5} />
                                        </div>
                                        Education
                                    </h3>
                                </Reveal>

                                <div className="grid gap-6">
                                    {education.map((edu, index) => (
                                        <Reveal width="100%" key={index}>
                                            <motion.div
                                                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                                                className={`group glass-panel glass-panel-hover p-7 rounded-2xl transition-all duration-300 relative overflow-hidden border-l-4 ${edu.borderColor.replace('group-hover:', '')}`}
                                                style={{ borderLeftColor: edu.color.includes('teal') ? '#2dd4bf' : edu.color.includes('purple') ? '#c084fc' : '#60a5fa' }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                                <div className="flex justify-between items-start mb-3 relative z-10">
                                                    <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors outfit-font">
                                                        {edu.degree}
                                                    </h4>
                                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900/80 text-teal-200 border border-white/10 whitespace-nowrap shadow-inner backdrop-blur-md">
                                                        {edu.year}
                                                    </span>
                                                </div>
                                                <p className={`${edu.color} font-medium mb-3 relative z-10 tracking-wide`}>{edu.institution}</p>
                                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            </motion.div>
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
