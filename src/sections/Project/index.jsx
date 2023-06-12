import React from 'react';
import { ProjectCard } from '../../components';
import { projects } from '../../resources/constains';
import './style.scss';

function Project() {
    return (
        <div id="project" className="section section-project">
            <div className="text-center flow section-project-title animate-showin">
                <h1 className="text-heading1 text-color-secondary">Projects</h1>
                <p className="subtitle-section text">
                    While I do not have any formal work experience, I have gained practical
                    knowledge and skills through personal projects and collaborations with peers.
                </p>
            </div>
            {projects.map((proj) => {
                return (
                    <div key={proj?.Id} className="section-project__items">
                        {proj.Side === 'left' ? (
                            <>
                                <div className="section-project__items__image animate-showin">
                                    <div
                                        className="image-paralax animate-image-paralax"
                                        style={{
                                            backgroundImage: `url(${proj?.Image})`
                                        }}
                                    ></div>
                                </div>
                                <ProjectCard
                                    title={proj?.Title}
                                    description={proj?.Description}
                                    linkgit={proj?.Linkgit}
                                    linkview={proj?.Linkview}
                                    className="project-item-card animate-content-paralax animate-showin"
                                />
                            </>
                        ) : (
                            <>
                                <ProjectCard
                                    title={proj?.Title}
                                    description={proj?.Description}
                                    linkgit={proj?.Linkgit}
                                    linkview={proj?.Linkview}
                                    className="project-item-card animate-content-paralax animate-showin"
                                />
                                <div className="section-project__items__image animate-showin">
                                    <div
                                        className="image-paralax animate-image-paralax"
                                        style={{
                                            backgroundImage: `url(${proj?.Image})`
                                        }}
                                    ></div>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Project;
