import React from 'react';
const Tooltip = (props) => (
    <div>
        {props.children(...props)}
    </div>
);
export default Tooltip;