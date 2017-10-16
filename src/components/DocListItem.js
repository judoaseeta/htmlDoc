import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkDown from 'react-markdown';
import '../styles/DocListItem.scss';
const DocListItem = ({doc: {docId, title , content, createdAt}, setDoc}) => (
    <div
        className='docListItem_container-outer'
    >
        <div
            className='docListItem_container-overlay'
        >
            <h4
                onClick={() => setDoc(docId)}
            >Title: {title}
            </h4>
            
            <p>CreatedAt:{Date(createdAt)}</p>
        </div>
        <div
            className='docListItem_container-inner'
        >
            <ReactMarkDown
                className="docListItem-renderer"
                source={content}
            />
        </div>
    </div>
);
DocListItem.propTypes = {
    setDoc: PropTypes.func.isRequired,
    doc: PropTypes.shape({
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        lastModified: PropTypes.number
    })
}
export default DocListItem;