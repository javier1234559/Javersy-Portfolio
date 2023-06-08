import React from 'react';
import './style.scss';
import { FiCheckCircle } from '../../assets';
import { RoundIconButton, RoadmapCard } from '../../components';

function About() {
    return (
        <div className="section section-about">
            <div className="text-center flow section-about-title ">
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
                    <RoundIconButton value={FiCheckCircle} className="position-absolute" />
                    <RoadmapCard />
                </div>
            </div>
        </div>
    );
}

export default About;
