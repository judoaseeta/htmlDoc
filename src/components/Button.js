import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';
const Button = ({color, circle, disabled, onClick, radius, ...props}) => (
    <button
        className={
            `button ${color ? color : ''}
            ${circle ? 'circle': ''}
            ${disabled ? 'disabled' : ''}
            ${radius ? 'radius' : ''}
            `}
        disabled={disabled ? true : false}
        onClick={onClick}
        {...props}
    >{props.children}</button>
);
Button.defaultProps = {
    circle: false,
    disabled: false,
    radius: false,
}
Button.propTypes = {
    color: PropTypes.string,
    circle: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    radius: PropTypes.bool
}
export default Button;