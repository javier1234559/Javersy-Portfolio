/* eslint-disable react/no-array-index-key */
import React, { useRef, useContext } from 'react';
import { ToastContext } from '../../context';
import { RoundIconButton, ToastNotifiation } from '../../components';
import { gsap } from 'gsap';
import { heroImg, FiGitHubDark, FiLinkedin, FiTwitter, FiAtSign } from '../../assets';
import './style.scss';

function Home() {
    const listIcon = [FiGitHubDark, FiLinkedin, FiTwitter, FiAtSign];
    const savedTexts = [
        'github.com/javier1234559',
        'linkedin.com/in/minh-nhật-nguyễn-044535242',
        'twitter.com/NhatNgu39098355',
        'nhat1234559@gmail.com'
    ];
    const iconRefs = useRef([]);
    const { showToast } = useContext(ToastContext);

    const handleHover = (index) => {
        gsap.to(iconRefs.current[index], { y: -10, duration: 0 });
    };

    const handleHoverExit = (index) => {
        gsap.to(iconRefs.current[index], { y: 0, duration: 0 });
    };

    const handleSavedClick = (index) => {
        const textToCopy = savedTexts[index];
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast('typeinfo', 'Saved Infor');
        });
    };

    return (
        <div id="home" className="section section-home">
            <div className="section-home__item ">
                <h1 className="text-title content-animate-showin">
                    I’m <span>JAVIER</span> A WEB DEVERLOPER
                </h1>
                <p className="text content-animate-showin">
                    I'm Nhat,a developer from Vietnam. I'm passionate about web development and
                    software, and I enjoy using technology to solve problems and create new things.
                </p>
                <ul className="section-home__listIcon">
                    {listIcon.map((icon, index) => (
                        <li
                            ref={(element) => (iconRefs.current[index] = element)}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHoverExit(index)}
                            onClick={() => handleSavedClick(index)}
                            className="icon-animate-showin"
                            key={`index_${index}`}
                        >
                            <RoundIconButton value={icon} url="#" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="section-home__item">
                <img src={heroImg} alt="Hero" className="image-hero-animate-showin" />
            </div>
            <ToastNotifiation />
        </div>
    );
}

export default Home;
