import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import './style.scss';

function ToggleThemeButton(props) {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className={`toggle-theme-button ${props?.className}`} onClick={toggleTheme}>
            {/* <img src={props?.value} alt="" /> */}
            {isDarkTheme ? <MdOutlineLightMode className="custom-icon-light" /> : <MdDarkMode />}
            {/* </div> */}
        </button>
    );
}

export default ToggleThemeButton;
