import React from 'react';
import Button from './Button';
import '../styles/EditorPanel.scss';
const EditorPanel = ({lastModified, onSave, title}) => (
    <div
        className="editorpanel_container"
    >
        <div
            className="editorpanel_container_inner"
        >
            <h5>Title: {title}</h5>
            {lastModified
                ? <p>{Date(lastModified)}</p>
                : null
            }   
        </div>
        <div>
            <Button
                color="red"
                onClick={onSave}
            >Save</Button>
        </div>
    </div>
);
export default EditorPanel;