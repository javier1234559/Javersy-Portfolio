import React from 'react';
import './style.scss';

function Button(props) {
    return (
        <button type={props?.type} className={`button ${props?.className}`}>
            <p>{props?.value}</p>
        </button>
    );
}

export default Button;
