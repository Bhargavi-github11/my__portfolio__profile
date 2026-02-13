import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

import PageTransition from './PageTransition';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <PageTransition variant="slideUp">
            <section className="py-20 bg-transparent text-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-20 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Connect</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-gray-300">
                                    <div className="bg-slate-800 p-3 rounded-full text-teal-400">
                                        <Mail size={24} />
                                    </div>
                                    <span>kanchetibhargavi11@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-300">
                                    <div className="bg-slate-800 p-3 rounded-full text-teal-400">
                                        <Phone size={24} />
                                    </div>
                                    <span>7013282724</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-300">
                                    <div className="bg-slate-800 p-3 rounded-full text-teal-400">
                                        <MapPin size={24} />
                                    </div>
                                    <span>Andhra Pradesh, India</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
                                >
                                    {status === 'sending' ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Contact;
