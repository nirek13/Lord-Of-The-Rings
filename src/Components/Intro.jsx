import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './intro.css';

const verse = [
    "Three rings for the Elven-kings under the sky,",
    "Seven for the Dwarf-lords in their halls of stone,",
    "Nine for mortal men doomed to die,",
    "One for the Dark Lord on his dark throne;",
    "In the Land of Mordor where the shadows lie.",
    "",
    "One ring to rule them all, one ring to find them,",
    "One ring to bring them all, and in the darkness bind them;",
    "In the Land of Mordor where the shadows lie."
];

const Intro = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, verse.length * 1200 + 3000); // Adjusted timing

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`intro-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
            {verse.map((line, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, x: (index % 2 === 0 ? -20 : 20) }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: index * 1.2,
                        duration: 1.2,
                        ease: 'easeInOut',
                    }}
                    className="verse-line"
                >
                    {/* Overlay for magical whispers */}
                    <span className="whisper-overlay">{line}</span>
                    <span className="primary-line">{line}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default Intro;
