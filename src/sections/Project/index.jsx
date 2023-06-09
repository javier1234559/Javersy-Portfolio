import React from 'react';
import { ProjectCard } from '../../components';
import { contactImg } from '../../assets';
import './style.scss';

function Project() {
    return (
        <div id="project" className="section section-project">
            <div className="text-center flow section-project-title">
                <h1 className="text-heading1 text-color-secondary">Projects</h1>
                <p className="subtitle-section text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, blanditiis
                    laudantium eos quas voluptate vel autem quam, odio error quaerat consequatur
                    praesentium et quae veritatis itaque dolorem quibusdam iusto rem!
                </p>
            </div>
            <div className="section-project__items">
                <div>
                    <img src={contactImg} alt="project-item" />
                </div>
                <ProjectCard className="project-item-card" />
            </div>
            <div className="section-project__items">
                <ProjectCard className="project-item-card" />
                <div>
                    <img src={contactImg} alt="project-item" />
                </div>
            </div>
            <div className="section-project__items">
                <div>
                    <img src={contactImg} alt="project-item" />
                </div>
                <ProjectCard className="project-item-card" />
            </div>
        </div>
    );
}

export default Project;
