import React from 'react';
import DocListItem from './DocListItem';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import NewDocItem from './NewDocItem';
import '../styles/DocList.scss';
const DocList = ({Docs, isNewDocOn, newDocOpen, setDoc}) => (
    <div
        className="doclist"
    >
        <NewDocItem 
            isNewDocOn={isNewDocOn}
            newDocOpen={newDocOpen}
        />
        {Docs.size
            ?  Docs.toJS().map(doc => 
                <DocListItem 
                    doc={doc}
                    key={doc.docId}
                    setDoc={setDoc}      
                />
            )  
            : <p>You don't have any doc yet. How about make your first doc?</p>
        }
    </div>
);
DocList.propTypes = {
    newDocOpen: PropTypes.func.isRequired,
    setDoc: PropTypes.func.isRequired,
    Docs: PropTypes.instanceOf(List),
    isNewDocOn: PropTypes.bool
}
export default DocList