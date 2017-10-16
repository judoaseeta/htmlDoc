import React from 'react';
import ReactMarkDown from 'react-markdown';
import '../styles/CodeRenderer.scss';
const CodeRenderer = (props) => (
    <ReactMarkDown
        className="renderer"
        source={props.code}
    />
);
export default CodeRenderer;