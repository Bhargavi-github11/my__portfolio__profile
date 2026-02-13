import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, variant = 'slide' }) => {
    const variants = {
        slide: {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 20 },
            transition: { duration: 0.4 }
        },
        fade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 }
        },
        scale: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.4 }
        },
        slideUp: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -50 },
            transition: { duration: 0.5 }
        },
        rotate: {
            initial: { opacity: 0, rotate: -5, scale: 0.9 },
            animate: { opacity: 1, rotate: 0, scale: 1 },
            exit: { opacity: 0, rotate: 5, scale: 0.9 },
            transition: { duration: 0.5 }
        }
    };

    const selectedVariant = variants[variant] || variants.slide;

    return (
        <motion.div
            initial={selectedVariant.initial}
            animate={selectedVariant.animate}
            exit={selectedVariant.exit}
            transition={selectedVariant.transition}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
