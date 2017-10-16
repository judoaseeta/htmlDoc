import React from 'react';

const Input = ({ onChange, ...props }) => (
        <input 
            onChange={onChange}
            {...props}
        />
);
export default Input;