import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ValidatedInput.scss';
const ValidatedInput = (props) => {
    let inputRef;
        return(
            <div
                className='ValidatedInput_container'
                onClick={() => inputRef.focus()}
            >
                <p
                    className="ValidatedInput_placeholder"
                >{props._placeholder}</p>
                <input
                    className="ValidatedInput_inputfield"
                    onChange={props.onChange}
                    ref={ref => inputRef = ref}
                    {...props}
                />
                <p
                    className="ValidatedInput_error"
                >{props.error}</p>
            </div>
        )
}
ValidatedInput.propTypes = {
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    _placeholder: PropTypes.string.isRequired,
}
export default ValidatedInput;