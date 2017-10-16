import React from 'react';
import Button from './Button';
import ValidatedInput from './ValidatedInput';
import PropTypes from 'prop-types';
import '../styles/NewDoc.scss';
const NewDoc = (props) => (
    <div
        className="newdoc_container"
    >
        <form
            className="newdoc_form"
            onSubmit={props.onSubmit}
        >
            <h4>Create New Doc</h4>
            <ValidatedInput 
                name="title"
                type="text"
                value={props.title}
                _placeholder="Title of new doc."
                onChange={props.onChange}
            />
            <Button
                color="blue"
            >Submit</Button>
        </form>
    </div>
);
NewDoc.propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default NewDoc;