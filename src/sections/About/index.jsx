import React from 'react';
import './style.scss';
import { FiCheckCircle, FiLoadSignCircle } from '../../assets';
import { RoundIconButton, RoadmapCard } from '../../components';

function About() {
    return (
        <div id="about" className="section section-about">
            <div className="text-center flow section-about-title animate-showin ">
                <h1 className="text-heading1 text-white">About Me</h1>
                <p className="subtitle-section text text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, blanditiis
                    laudantium eos quas voluptate vel autem quam, odio error quaerat consequatur
                    praesentium et quae veritatis itaque dolorem quibusdam iusto rem!
                </p>
            </div>
            <div>
                <div className="roadmap">
                    <RoundIconButton value={FiCheckCircle} className="position-absolute" />
                    <RoundIconButton value={FiCheckCircle} className="position-absolute" />
                    <RoundIconButton value={FiCheckCircle} className="position-absolute" />
                    <RoundIconButton value={FiLoadSignCircle} className="position-absolute" />
                    <RoadmapCard left offset="1" className="animate-showin roadmap-destop" />
                    <RoadmapCard right offset="2" className="animate-showin roadmap-destop" />
                    <RoadmapCard left offset="3" className="animate-showin roadmap-destop" />
                    <RoadmapCard right offset="4" className="animate-showin roadmap-destop" />
                    <RoadmapCard left offset="1" className="animate-showin roadmap-tablet" />
                    <RoadmapCard left offset="2" className="animate-showin roadmap-tablet" />
                    <RoadmapCard left offset="3" className="animate-showin roadmap-tablet" />
                    <RoadmapCard left offset="4" className="animate-showin roadmap-tablet" />
                </div>
            </div>
        </div>
    );
}

export default About;
