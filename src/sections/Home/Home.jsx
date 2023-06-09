/* eslint-disable react/no-array-index-key */
import React from 'react';
import { RoundIconButton } from '../../components';
import { gsap } from 'gsap';
import { heroImg, FiGitHubDark, FiLinkedin, FiTwitter, FiAtSign } from '../../assets';
import './style.scss';

function Home() {
    const listIcon = [FiGitHubDark, FiLinkedin, FiTwitter, FiAtSign];

    return (
        <div id="home" className="section section-home">
            <div className="section-home__item">
                <h1 className="text-title ">
                    I’m <span>JAVIER</span> A WEB DEVERLOPER
                </h1>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur. Massa eu aliquet tellus integer nec
                    dictum urna. Odio ut duis luctus in platea faucibus eget aliquam.
                </p>
                <ul className="section-home__listIcon">
                    {listIcon.map((icon, index) => (
                        <li key={`index_${index}`}>
                            <RoundIconButton value={icon} url="#" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="section-home__item">
                <img src={heroImg} alt="Hero" />
            </div>
        </div>
    );
}

export default Home;
