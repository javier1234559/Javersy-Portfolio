import React from 'react';
import './style.scss';

function RoadmapCard(props) {
    return (
        <div
            className={`card roadmap-card ${props?.className}`}
            data-right={props?.left ? 'right' : 'left'}
            data-offset={props?.offset}
        >
            <div className="roadmap-card-date">
                <p>{props?.date}</p>
            </div>
            <div className="roadmap-card-content">
                <h1>{props?.title}</h1>
                <p>{props?.subtitle}</p>
            </div>
            <div className="roadmap-card-tags">
                {props?.skills.map((skill) => {
                    return <div>{skill}</div>;
                })}
            </div>
        </div>
    );
}

export default RoadmapCard;
