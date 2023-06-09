/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FiGitHubLight, FiLinkedinLight, FiTwitterLight, FiAtSignLight } from '../../assets';
import './style.scss';

function Footer() {
    const listIcon = [FiGitHubLight, FiLinkedinLight, FiTwitterLight, FiAtSignLight];

    return (
        <footer id='footer' className="footer-section">
            <p>© Javier 2023. All rights reserved.</p>
            <p>Made with 😍 using Reactjs, hosted on GitHub Page.</p>
            <ul>
                {listIcon.map((icon, index) => (
                    <li key={`index_${index}`}>
                        <a href="#">
                            <img src={icon} alt="icon" className="footer-icon" />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
