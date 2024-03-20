import React from 'react';
import './style.scss';
import { FiCheckCircle, FiLoadSignCircle } from '../../assets';
import { RoundIconButton, RoadmapCard } from '../../components';
import { roadmaps } from '../../resources/constains';

function About() {
    return (
        <div id="about" className="section section-about">
            <div className="text-center flow section-about-title animate-showin ">
                <h1 className="text-heading1 text-white">About Me</h1>
                <p className="subtitle-section text text-white">
                    I'm a fourth-year student at the University of Technology and Education in Ho
                    Chi Minh City, specializing in computer science and software engineering. My
                    favorite languages are Java and JavaScript, and I'm always eager to expand my
                    knowledge in these areas.
                </p>
            </div>
            <div>
                <div className="roadmap">
                    {Array.from({ length: 7 }, (_, i) => (
                        <RoundIconButton
                            key={i}
                            value={FiCheckCircle}
                            className="position-absolute"
                        />
                    ))}
                    <RoundIconButton value={FiLoadSignCircle} className="position-absolute" />
                  
                    {roadmaps.map((roadmap) => (
                        <>
                            <RoadmapCard
                                key={`${roadmap.Id}-desktop`}
                                offset={roadmap.Id}
                                className="animate-showin roadmap-desktop"
                                left={roadmap.Side === 'left'}
                                date={roadmap.Date}
                                title={roadmap.Title}
                                subtitle={roadmap.Subtitle}
                                skills={roadmap.Skills}
                            />
                            <RoadmapCard
                                key={`${roadmap.Id}-tablet`}
                                offset={roadmap.Id}
                                className="animate-showin roadmap-tablet"
                                date={roadmap.Date}
                                left="right"
                                title={roadmap.Title}
                                subtitle={roadmap.Subtitle}
                                skills={roadmap.Skills}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
