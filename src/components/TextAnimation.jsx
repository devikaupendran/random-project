import React from 'react';
import { motion } from 'framer-motion';

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            type: 'spring',
            stiffness: 80,
            damping: 10,
        },
    }),
};

const TextAnimation = ({ text, className = '' }) => {
    return (
        <div className={`flex justify-center items-center flex-wrap w-full gap-1 z-10 ${className}`}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={letterAnimation}
                    className="inline-block  text-[30px] md:text-[50px] lg:text-[80px] xl:text-[100px] font-semibold"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

export default TextAnimation;
