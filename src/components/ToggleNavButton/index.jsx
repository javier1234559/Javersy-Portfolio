import React, { useLayoutEffect, useState, useContext } from 'react';
import { MdSort, MdClear } from 'react-icons/md';
import { ThemeContext } from '../../context/ThemeContext';
import './style.scss';

function ToggleNavButton(props) {
    const [hide, setHide] = useState(true);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    useLayoutEffect(() => {
        setHide(false);
    }, []);

    const togglehide = () => {
        setHide(!hide);
    };

    return (
        <div id="navbar__reponsive--toggle">
            <div className={`navbar__reponsive sidebar-mobile ${hide ? 'active' : ' '}`}>
                <button
                    className={`toggle-theme-button ${props?.className}`}
                    onClick={togglehide}
                    id="nababar-reponsive--button"
                >
                    {hide ? (
                        <MdClear className={isDarkTheme ? `custom-icon-light` : ``} />
                    ) : (
                        <MdSort className={isDarkTheme ? `custom-icon-light` : ``} />
                    )}
                </button>
                <ul className="navbar__menu__reponsive  flow">
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#about">
                        <li>About</li>
                    </a>
                    <a href="#project">
                        <li>Project</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
            <button className={`toggle-theme-button ${props?.className}`} onClick={togglehide}>
                {hide ? (
                    <MdClear className={isDarkTheme ? `custom-icon-light` : ``} />
                ) : (
                    <MdSort className={isDarkTheme ? `custom-icon-light` : ``} />
                )}
            </button>
        </div>
    );
}

export default ToggleNavButton;
