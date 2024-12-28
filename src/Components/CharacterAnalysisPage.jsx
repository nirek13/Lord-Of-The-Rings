import React from "react";
import './CharacterAnalysisPage.css';

const CharacterAnalysisPage = () => {
    return (
        <div className="character-analysis-page">
            {/* Frodo Image Container */}
            <div className="frodo-image-container">
                <img
                    src="https://via.placeholder.com/300x400?text=Frodo+Baggins"
                    alt="Frodo Baggins"
                    className="frodo-image"
                />
            </div>

            {/* Content Section */}
            <div className="content">
                <h1>Character Analysis: Frodo Baggins</h1>

                {/* Biography Section */}
                <section className="biography">
                    <h2>Biography</h2>
                    <p>
                        Frodo Baggins is a hobbit from the Shire and the main protagonist of
                        J.R.R. Tolkien's "The Lord of the Rings" series. He is entrusted with
                        the task of destroying the One Ring, a powerful artifact created by the Dark Lord Sauron to control Middle-earth. Throughout the series, Frodo
                        faces numerous challenges, tests of character, and the burden of the
                        Ring itself. His journey takes him from the peaceful Shire to the
                        dangerous lands of Mordor.
                    </p>
                </section>

                {/* Personality Traits Section */}
                <section className="traits">
                    <h2>Personality Traits</h2>
                    <ul>
                        <li><strong>Bravery:</strong> Despite being a small hobbit, Frodo consistently displays courage in the face of great danger.</li>
                        <li><strong>Selflessness:</strong> Frodo is willing to sacrifice himself for the greater good of Middle-earth, especially for the destruction of the One Ring.</li>
                        <li><strong>Resilience:</strong> Even when overwhelmed by the Ring's influence, Frodo pushes forward, displaying incredible mental and emotional strength.</li>
                        <li><strong>Loyalty:</strong> His loyalty to his friends, especially Samwise Gamgee, is one of his defining characteristics.</li>
                        <li><strong>Compassion:</strong> Frodo shows empathy and kindness to those around him, often seeking peaceful resolutions.</li>
                    </ul>
                </section>

                {/* Impact Section */}
                <section className="impact">
                    <h2>Impact on Middle-earth</h2>
                    <p>
                        Frodo’s journey is one of personal sacrifice and the triumph of good over evil. Despite the overwhelming power of the One Ring, Frodo maintains his moral compass, showing that even the smallest person can change the course of the future. His relationship with Sam, his resilience, and his decision to trust others ultimately allow him to fulfill the mission of destroying the Ring, ensuring Sauron's defeat.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CharacterAnalysisPage;
