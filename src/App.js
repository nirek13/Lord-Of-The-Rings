import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import CharacterAnalysisPage from './Components/CharacterAnalysisPage'; // Ensure correct capitalization
import GalleryPage from './Components/Booksnap';
import Essays from "./Components/Essay";
const App = () => {
    // const [showIntro, setShowIntro] = useState(true); // Start by showing the intro
    // const [isIntroComplete, setIsIntroComplete] = useState(false); // Track if the intro is complete

    // const handleIntroComplete = () => {
    //     setShowIntro(false); // Hide the intro after it completes
    //     setIsIntroComplete(true); // Mark intro as complete to show LandingPage and Navbar
    // };

    // useEffect(() => {
    //     // Start loading LandingPage and Navbar as soon as component mounts
    //     setIsIntroComplete(false); // Set this to true if you need preloading behavior only
    // }, []);

    return (
        <div>
            {/* Render the Intro until it's complete */}
            {/* {showIntro && <Intro onComplete={handleIntroComplete} />} */}

            {/* When the intro is complete, show the rest of the app */}
            {/* {isIntroComplete && ( */}
            <Router>
                <Navbar />
                <Routes>
                    {/* Use the `element` prop to render components */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/characters" element={<CharacterAnalysisPage />} />
                    <Route path="/Booksnaps" element={<GalleryPage/>} />
                    <Route path="/Essay" element={<Essays/>} />
                </Routes>
            </Router>
            {/* )} */}
        </div>
    );
};

export default App;
