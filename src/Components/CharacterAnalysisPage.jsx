import React from "react";
import './CharacterAnalysisPage.css';

const CharacterAnalysisPage = () => {
    return (
        <div className="character-analysis-page">
            {/* Sauron Image Container */}
            <div className="sauron-image-container">
                <img
                    src="https://via.placeholder.com/300x400?text=Sauron"
                    alt="Sauron"
                    className="sauron-image"
                />
            </div>

            {/* Content Section */}
            <div className="content">
                <h1 className="main-title">Sauron: The Dark Lord Unveiled</h1>

                {/* Biography Section */}
                <section className="biography">
                    <h2>Biography</h2>
                    <p>
                        Once a Maia of Aulë, Sauron succumbed to the allure of power, becoming Morgoth's most formidable servant. After Morgoth's fall, Sauron forged his own path to dominion, crafting the One Ring as the ultimate tool to subjugate Middle-earth. With an unmatched blend of intelligence and malice, Sauron's legacy is one of fear and control.
                    </p>
                    <button className="reveal-more-button" onClick={() => alert('More details coming soon!')}>
                        Learn More
                    </button>
                </section>

                {/* Personality Traits Section */}
                <section className="traits">
                    <h2>Personality Traits</h2>
                    <ul>
                        <li>
                            <strong>Ambition:</strong> His vision extends beyond conquest, aiming for absolute control over life itself.
                        </li>
                        <li>
                            <strong>Deceit:</strong> Master of lies, Sauron manipulates allies and enemies alike with false promises.
                        </li>
                        <li>
                            <strong>Cruelty:</strong> His tactics ensure submission, blending fear with unyielding brutality.
                        </li>
                        <li>
                            <strong>Persistence:</strong> No defeat is final; Sauron bides his time, waiting for the perfect moment to rise.
                        </li>
                        <li>
                            <strong>Intelligence:</strong> An architect of chaos, his deep understanding of lore and strategy makes him unstoppable.
                        </li>
                    </ul>
                </section>

                {/* Impact Section */}
                <section className="impact">
                    <h2>Legacy and Impact</h2>
                    <p>
                        The One Ring, Sauron's greatest creation, ensnared the free peoples of Middle-earth in an enduring cycle of war and despair. Even in defeat, his influence lingers, a testament to the destructive power of unchecked ambition. Sauron’s story is both a cautionary tale and a symbol of resilience in the face of tyranny.
                    </p>
                    <blockquote className="quote">
                        "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them."
                    </blockquote>
                </section>

                {/* Interactive Quiz Section */}
                <section className="quiz">
                    <h2>Quiz: How Well Do You Know Sauron?</h2>
                    <p>Test your knowledge about Sauron's lore and his role in Middle-earth!</p>
                    <button className="start-quiz-button" onClick={() => alert('Quiz feature coming soon!')}>
                        Start Quiz
                    </button>
                </section>
            </div>
        </div>
    );
};

export default CharacterAnalysisPage;
