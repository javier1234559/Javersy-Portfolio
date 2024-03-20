import React, { useLayoutEffect, useRef, useState } from 'react';
import { Navbar, ScrollBackTop } from './components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider, ToastProvider } from './context';
import { Home, About, Project, Contact, Footer } from './sections';
import './styles/index.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const app = useRef(null);
    const tl = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //TimeLine
            tl.current = gsap
                .timeline()
                .fromTo(
                    '.animation-navbar-showin',
                    { opacity: 0, x: '-20px' },
                    { opacity: 1, x: 0, ease: 'power4.in', stagger: 0.2, delay: 0.5 }
                )
                .fromTo(
                    '.icon-animate-showin',
                    { opacity: 0, x: '-20px' },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.1,
                        ease: 'power4.out',
                        stagger: 0.2,
                        delay: 0.5
                    }
                )
                .to(
                    '.content-animate-showin',
                    { duration: 1.5, translateY: -20, opacity: 1 },
                    '-=1'
                )
                .to(
                    '.image-hero-animate-showin',
                    { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
                    '-=1'
                );

            //Onscroller
            const sections = document.querySelectorAll('.animate-showin');
            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: '100px' },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'Power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            toggleActions: 'play none none reset'
                        }
                    }
                );
            });
            // Parallax Effects
            gsap.to('.animate-content-parallax', {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.animate-content-parallax',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }, app);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="blobgradientblur1" />
            <div className="blobgradientblur2" />
            <ToastProvider>
                <ThemeProvider>
                    <div className="themes " id="theme" ref={app}>
                        <div className="wrapper">
                            <Navbar />
                        </div>
                        <div className="wrapper">
                            <Home />
                        </div>
                        <About />
                        <Project />
                        <div className="wrapper">
                            <Contact />
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
                <ScrollBackTop />
            </ToastProvider>
        </>
    );
}

export default App;
