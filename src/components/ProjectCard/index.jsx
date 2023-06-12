import React, { useContext } from 'react';
import Button from '../Button';
import { FiGitHubLight, FiGitHubDark } from '../../assets';
import { ThemeContext } from '../../context/ThemeContext';
import './style.scss';

function ProjectCard(props) {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`project-card flow ${props?.className}`}>
            <h1 className="text-heading2">{props?.title}</h1>
            <p>{props?.description}</p>
            <div>
                {isDarkTheme ? (
                    <img src={FiGitHubLight} alt="" />
                ) : (
                    <img src={FiGitHubDark} alt="" />
                )}
                <a href={props?.linkgit}>{props?.linkgit}</a>
            </div>
            <Button value="View" className="project-card-button" href={props?.linkview} />
        </div>
    );
}

export default ProjectCard;
