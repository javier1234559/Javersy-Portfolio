import React, { useContext } from 'react';
import { Button, ToggleThemeButton, ToggleNavButton } from '../../components';
import { lightIcon, darkIcon } from '../../assets/index';
import { ThemeContext } from '../../context/ThemeContext';
import './style.scss';

function Navbar() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <ToggleNavButton className="navbar__mobile" />
            <div className="navbar__logo animation-navbar-showin">
                {isDarkTheme ? (
                    <img src={lightIcon} alt="Logo" />
                ) : (
                    <img src={darkIcon} alt="Logo" />
                )}
            </div>
            <ul className="navbar__menu animation-navbar-showin">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li className="animation start-home" />
            </ul>
            <div className="animation-navbar-showin navbar__button__group">
                <ToggleThemeButton className="navbar__name" />
                <Button value="Resume" href="/Javersy-Portfolio/src/resources/pdf/CV_Software_Engineer.pdf" />
            </div>
        </nav>
    );
}

export default Navbar;
