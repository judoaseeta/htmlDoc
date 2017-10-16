import React from 'react';
const RenderPropContainer = (props) => {
    const { children, header } = props;
    return(
        <div>
            <div>
                {header ? header(props) : null}
            </div>
            <div>
                {children(props)}
            </div>
        </div>
    )
}
export default RenderPropContainer;