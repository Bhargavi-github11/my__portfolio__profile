import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white flex flex-col relative overflow-hidden">

        {/* Global Dynamic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-teal-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-500/20 rounded-full blur-[110px] animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        </div>

        <Navbar />

        <div className="flex-grow pt-16 relative z-10">
          <AnimatedRoutes />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
