import React from 'react';
import DocListItem from './DocListItem';
const DocList = ({DocList, selectDoc}) => (
    <div>
    {DocList 
        ?  DocList.map(doc => {
            return(
            <DocListItem 
                key={doc.title}
                title={doc.title}
                content={doc.content}
                createdAt={doc.createdAt} 
                onClickHandler={selectDoc}       
            />
            );
         })
        :  <div>You haven't any doc! </div>
    }
    </div>
);
export default DocList