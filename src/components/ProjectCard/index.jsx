import React, { useContext } from 'react';
import Button from '../Button';
import { FiGitHubLight, FiGitHubDark } from '../../assets';
import { ThemeContext } from '../../context/ThemeContext';
import './style.scss';

function ProjectCard(props) {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`project-card flow ${props?.className}`}>
            <h1 className="text-heading2">Create amazing SVG animations</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nisl volutpat ultrices amet
                tristique non nibh sollicitudin eu. Et vulputate consequat nulla sed eget tortor
                elementum
            </p>
            <div>
                {isDarkTheme ? (
                    <img src={FiGitHubLight} alt="" />
                ) : (
                    <img src={FiGitHubDark} alt="" />
                )}
                <a href="#">http://localhost:5173/Javersy-Portfolio/#</a>
            </div>
            <Button value="View" className="project-card-button" />
        </div>
    );
}

export default ProjectCard;
