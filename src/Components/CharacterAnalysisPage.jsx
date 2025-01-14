import React from "react";
import './CharacterAnalysisPage.css';

const CharacterAnalysisPage = () => {
    return (
        <div className="character-analysis-page">
            {/* Frodo Image Container */}
            <div className="frodo-image-container">
                <img
                    src="https://via.placeholder.com/300x400?text=Frodo"
                    alt="Frodo"
                    className="frodo-image"
                />
            </div>

            {/* Content Section */}
            <div className="content">
                <h1 className="main-title">Frodo: The Ring Bearer</h1>

                {/* Biography Section */}
                <section className="biography">
                    <h2>Biography</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                            <strong>Lorem:</strong> Ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            <strong>Dolor:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                        <li>
                            <strong>Amet:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </li>
                        <li>
                            <strong>Consectetur:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </li>
                        <li>
                            <strong>Adipiscing:</strong> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                        </li>
                    </ul>
                </section>

                {/* Impact Section */}
                <section className="impact">
                    <h2>Legacy and Impact</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                    <blockquote className="quote">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    </blockquote>
                </section>

                {/* Interactive Quiz Section */}
                <section className="quiz">
                    <h2>Quiz: How Well Do You Know Frodo?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test your knowledge about Frodo!</p>
                    <button className="start-quiz-button" onClick={() => alert('Quiz feature coming soon!')}>
                        Start Quiz
                    </button>
                </section>
            </div>
        </div>
    );
};

export default CharacterAnalysisPage;
