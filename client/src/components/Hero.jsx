import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import PageTransition from './PageTransition';

const Hero = () => {
    return (
        <PageTransition variant="fade">
            <div id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
                {/* Background Gradients & Particles */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 12, border: "2s", repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="text-lg md:text-xl text-teal-400 font-medium tracking-widest uppercase mb-3 heading-font">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                            >
                                Full Stack Developer
                            </motion.span>
                        </h2>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 heading-font tracking-tight leading-tight">
                            Hi, I'm <br className="md:hidden" />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 py-1">
                                Bharghavi Kancheti
                                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-3/4 h-[0.4em] w-full fill-blue-500/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C61.321 13.65 13.8 4.706 7.545 4.907c-2.863-1.077-4.828 1.932-5.735 9.17-1.309 10.435.613 22.046 5.8 30.636 1.186 1.963 8.358 1.488 15.352-2.193 15.285-8.046 177.348-18.796 177.348-18.796 79.444-2.871 161.433-2.138 217.411 1.942 1.341.098 2.682.164 4.02-.032 23.364-3.414 7.674-12.738-16.142-12.738-95.034 0-143.18 10.742-166.273 6.942z" fill="currentColor"></path></svg>
                            </span>
                        </h1>

                        <motion.div
                            className="mt-5 text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        >
                            <span className="block mb-3 text-xl md:text-2xl text-slate-200 font-medium heading-font">
                                A frontend developer who blends creativity with clean, scalable code.
                            </span>
                            I build modern, responsive web experiences that are <span className="text-teal-400 font-medium">user-friendly</span>, <span className="text-blue-400 font-medium">visually polished</span>, and built to last.
                        </motion.div>

                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a
                                href="/projects"
                                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(45,212,191,0.4)] hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.5)] transform hover:-translate-y-1 heading-font"
                            >
                                View Projects
                                <motion.div className="ml-2" whileHover={{ x: 5 }}>
                                    <ArrowRight className="h-5 w-5" />
                                </motion.div>
                            </a>
                            <a
                                href="/contact"
                                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full glass-panel glass-panel-hover text-white transition-all duration-300 transform hover:-translate-y-1 heading-font border border-white/20 hover:bg-white/10"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex justify-center gap-6 mt-12">
                            <a
                                href="https://github.com/Bhargavi-github11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl glass-panel glass-panel-hover text-gray-300 hover:text-white hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <Github size={28} className="group-hover:text-teal-400 transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bharghavi-kancheti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl glass-panel glass-panel-hover text-gray-300 hover:text-white hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <Linkedin size={28} className="group-hover:text-blue-400 transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Scroll</span>
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                        <motion.div
                            className="w-1.5 h-3 bg-teal-500 rounded-full"
                            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Hero;
