import React, { createContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme') === 'dark');

    useLayoutEffect(() => {
        if (isDarkTheme) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    }, [isDarkTheme]);

    const applyLightTheme = () => {
        //theme root color
        document.querySelector('body').classList.remove('theme-dark');
       
        localStorage.setItem('theme', 'light');
    };

    const applyDarkTheme = () => {
        //theme root color
        document.querySelector('body').classList.add('theme-dark');
        const themeElements = document.querySelectorAll('.theme');
        //theme for change Icon
        themeElements.forEach((element) => {
            element.classList.add('state-dark');
        });
        localStorage.setItem('theme', 'dark');
    };

    const toggleTheme = () => {
        if (isDarkTheme) {
            applyLightTheme();
            setIsDarkTheme(false);
        } else {
            applyDarkTheme();
            setIsDarkTheme(true);
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
