import React from 'react';
import { ProjectCard } from '../../components';
import './style.scss';

function Project() {
    return (
        <div id="project" className="section section-project">
            <div className="text-center flow section-project-title animate-showin">
                <h1 className="text-heading1 text-color-secondary">Projects</h1>
                <p className="subtitle-section text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, blanditiis
                    laudantium eos quas voluptate vel autem quam, odio error quaerat consequatur
                    praesentium et quae veritatis itaque dolorem quibusdam iusto rem!
                </p>
            </div>
            <div className="section-project__items">
                <div className="section-project__items__image animate-showin">
                    <div
                        className="image-paralax animate-image-paralax"
                        style={{
                            backgroundImage:
                                "url('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6L?ver=72af')"
                        }}
                    ></div>
                </div>
                <ProjectCard className="project-item-card animate-content-paralax animate-showin" />
            </div>
            <div className="section-project__items">
                <ProjectCard className="project-item-card animate-showin" />
                <div className="section-project__items__image animate-showin">
                    <div
                        className="image-paralax"
                        style={{
                            backgroundImage:
                                "url('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6L?ver=72af')"
                        }}
                    ></div>
                </div>
            </div>
            <div className="section-project__items">
                <div className="section-project__items__image animate-showin">
                    <div
                        className="image-paralax"
                        style={{
                            backgroundImage:
                                "url('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6L?ver=72af')"
                        }}
                    ></div>
                </div>
                <ProjectCard className="project-item-card animate-showin" />
            </div>
        </div>
    );
}

export default Project;
