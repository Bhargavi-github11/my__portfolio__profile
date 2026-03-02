import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/skills' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300">
            <div className="glass-panel border-b-0 border-white/5 rounded-b-3xl mx-2 mt-2 md:mx-4 md:mt-4 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className="relative group flex items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-shrink-0 font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-teal-100 to-teal-400 bg-clip-text text-transparent cursor-pointer outfit-font"
                            >
                                Bharghavi
                            </motion.div>
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 origin-left rounded-full"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </Link>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-2">
                                {links.map((link) => {
                                    const isActive = location.pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="relative px-5 py-2.5 text-sm font-medium transition-colors group rounded-full"
                                        >
                                            <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-teal-300' : 'text-slate-300 group-hover:text-white'}`}>
                                                {link.name}
                                            </span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-indicator"
                                                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-24 left-2 right-2 glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-40"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`${location.pathname === link.href
                                        ? 'text-teal-300 bg-white/10 border border-white/5'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        } block px-4 py-3 rounded-xl text-base font-medium transition-all`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
