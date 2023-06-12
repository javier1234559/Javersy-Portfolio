import React from 'react';
import './style.scss';

function Button(props) {
    const handleClick = () => {
        if (props.href) {
            window.open(props?.href, '_blank');
        } else {
            return;
        }
    };

    return (
        <button type={props?.type} className={`button ${props?.className}`} onClick={handleClick}>
            <p>{props?.value}</p>
        </button>
    );
}

export default Button;
