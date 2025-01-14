import React, { useState } from 'react';
import './navbar.css';
import Logo from '../logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {/* Hamburger icon (three lines) */}
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="/booksnaps">Booksnaps</a></li>
                <li><a href="/characters">Characters</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
