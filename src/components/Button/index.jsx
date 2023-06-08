import React from 'react';
import './style.scss';

function Button(props) {
    return (
        <div className={`button ${props?.className}`}>
            <p>{props?.value}</p>
        </div>
    );
}

export default Button;
