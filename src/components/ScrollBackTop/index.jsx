import React, { useState } from 'react';
import { TfiArrowUp } from 'react-icons/tfi';
import './style.scss';

function ScrollBackTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            className={`${visible === false ? 'disappear' : 'appear'} scrollbacktop-button `}
            onClick={scrollToTop}
        >
            <TfiArrowUp className="scrollbacktop-button--icon" />
        </button>
    );
}

export default ScrollBackTop;
