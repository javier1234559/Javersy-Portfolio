import React from 'react';
import './style.scss';

function RoundIconButton(props) {
    return (
        <a href={props?.url} className={props?.className}>
            <div className="round-icon-button">
                <img src={props?.value} alt="" />
            </div>
        </a>
    );
}

export default RoundIconButton;
