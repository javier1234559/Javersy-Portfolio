import React from 'react';
import Button from '../Button';
import { lightIcon } from '../../assets/index';
import './style.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={lightIcon} alt="Logo" />
            </div>
            <ul className="navbar__menu">
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
            <Button value="Resume" />
        </nav>
    );
}

export default Navbar;
