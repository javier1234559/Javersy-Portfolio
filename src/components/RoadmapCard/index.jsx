import React from 'react';
import './style.scss';

function RoadmapCard() {
    return (
        <div className="card roadmap-card">
            <div className="roadmap-card-date">
                <p>8/9/2002</p>
            </div>
            <div className="roadmap-card-content">
                <h1>Basic Programing</h1>
                <p>Learn the basic of programing</p>
            </div>
            <div className="roadmap-card-tags">
                <div>Git</div>
                <div>Home</div>
                <div>Javascript</div>
                <div>Javascript</div>
                <div>Spring boot</div>
            </div>
        </div>
    );
}

export default RoadmapCard;
