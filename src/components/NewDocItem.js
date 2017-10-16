import React from 'react';
import '../styles/NewDocItem.scss';
const NewDocItem = ({isNewDocOn, newDocOpen}) => (
        <i 
            className={`fa fa-plus-circle newDocItemIcon ${isNewDocOn ? 'off' :''}`}
            aria-hidden="true" 
            onClick={newDocOpen}
        />
)
export default NewDocItem;