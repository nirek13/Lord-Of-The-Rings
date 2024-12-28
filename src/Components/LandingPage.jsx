import React, { useEffect, useState } from 'react';
import './landing.css';

const LandingPage = () => {
    const [words, setWords] = useState([
        "ᚠᛖᚪᚱ", // Fear
        "ᛗᚪᚷᛁᚲ", // Magic
        "ᛗᛖᚱᛞᛖ", // Merde (French for poop, though it's not Elvish, it's often used in pop culture)
        "ᚪᚱᚲ", // Ark (could be interpreted as vessel or container)
        "ᛚᛁᚷᚻᛏ", // Light
        "ᛟᛞᚪᚱ", // Odar (could mean path or journey)
        "ᛏᛖᚱᛖᚪᚻ", // Tereah (fictitious Elvish word)
        "ᛃᛖᚩᚢᚪᛞ", // Yewad (a tree related word)
        "ᛁᛋᚪᚳ", // Isak (a strong name)
        "ᛗᚪᛏᛖᛋ", // Mates (friends or companions)
        "ᚴᚪᛞᛋᛖ", // Kadse (a crafted name)
        "ᚢᚾᚪᛏᚪ", // Unata (related to an unknown concept)
        "ᛏᛖᚾᛋᛖ", // Tense (state of being)
        "ᛒᚪᛏᛖ", // Bate (to strike or hit)
        "ᛚᚪᛏᛖ", // Late (time concept)
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWords((prevWords) => [
                ...prevWords,
                `ᛏᛖᚱᛖᚪᚻ` // Add unique words dynamically
            ]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page">
            {/* Ethereal floating Elvish words */}
            <div className="golden-background">
                {words.map((word, index) => (
                    <div key={index} className={`elvish-wisp wisp${index % 5}`}>
                        {word}
                    </div>
                ))}
            </div>

            {/* Interactive dissolving text */}
            <div className="content-overlay">
                <h1 className="lotr-title interactive-text">
                    The Lord of the Rings
                </h1>
                <h3 className="lotr-subtitle interactive-text">
                    2024 English ISU by Nirek Shetty
                </h3>
            </div>
        </div>
    );
};

export default LandingPage;
