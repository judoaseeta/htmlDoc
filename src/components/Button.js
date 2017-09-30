import React from 'react';
import '../styles/Button.scss';
const Button = ({color, circle, disabled, onClick, radius,...props}) => (
    <button
        className={
            `button ${color ? color : ''}
            ${circle ? 'circle': ''}
            ${disabled ? 'disabled' : ''}
            ${radius ? 'radius' : ''}
            `}
        disabled
        onClick={onClick ? onClick : null}
    >{props.children}</button>
);
export default Button;