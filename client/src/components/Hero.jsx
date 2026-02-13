import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import PageTransition from './PageTransition';

const Hero = () => {
    return (
        <PageTransition variant="fade">
            <div id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
                {/* Background Gradients & Particles */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="text-2xl md:text-3xl text-teal-400 font-semibold tracking-wide uppercase mb-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                Full Stack Developer
                            </motion.span>
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Hi, I'm <br className="md:hidden" />
                            <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                Bhargavi Kancheti
                                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-500/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C61.321 13.65 13.8 4.706 7.545 4.907c-2.863-1.077-4.828 1.932-5.735 9.17-1.309 10.435.613 22.046 5.8 30.636 1.186 1.963 8.358 1.488 15.352-2.193 15.285-8.046 177.348-18.796 177.348-18.796 79.444-2.871 161.433-2.138 217.411 1.942 1.341.098 2.682.164 4.02-.032 23.364-3.414 7.674-12.738-16.142-12.738-95.034 0-143.18 10.742-166.273 6.942z" fill="currentColor"></path></svg>
                            </span>
                        </h1>

                        <motion.div
                            className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            <span className="block mb-2 text-2xl font-light text-white">
                                a <span className="font-semibold text-white">frontend developer</span> who blends creativity with clean, scalable code.
                            </span>
                            I build modern, responsive web experiences that are <span className="text-white font-medium">user-friendly</span>, <span className="text-white font-medium">visually polished</span>, and built to last.
                        </motion.div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 transition-all shadow-lg hover:shadow-teal-500/30 transform hover:scale-105"
                            >
                                View Projects <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-700 text-base font-bold rounded-full text-gray-300 hover:text-white bg-transparent hover:bg-slate-800 transition-all hover:border-teal-400 transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex justify-center gap-6 mt-12">
                            <a
                                href="https://github.com/Bharghavi-Kancheti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-full text-gray-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-purple-500 group"
                            >
                                <Github size={28} className="group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bharghavi-kancheti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-full text-gray-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-blue-500 group"
                            >
                                <Linkedin size={28} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
                >
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Hero;
