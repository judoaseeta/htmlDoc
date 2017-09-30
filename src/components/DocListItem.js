import React from 'react';
const DocListItem = ({onClickHandler, title, content, createdAt}) => (
    <div
        onClick={onClickHandler}
    >
        <h5>{title}</h5>
        <p>{content}</p>
        <p>{createdAt}</p>
    </div>
);
export default DocListItem;