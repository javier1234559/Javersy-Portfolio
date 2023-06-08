import React from 'react';
import Button from '../Button';
import './style.scss';

function ProjectCard() {
    return (
        <div className="project-card flow">
            <h1 className="text-heading2">Create amazing SVG animations</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nisl volutpat ultrices amet
                tristique non nibh sollicitudin eu. Et vulputate consequat nulla sed eget tortor
                elementum
            </p>
            <div>
                <i>icon</i>
                @github
            </div>
            <Button value="View" className="project-card-button" />
        </div>
    );
}

export default ProjectCard;
