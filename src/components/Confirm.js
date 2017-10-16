import React from 'react';
import Button from './Button';
import ValidatedInput from './ValidatedInput';
import '../styles/ConfirmForm.scss';
const ConfirmComponent = ({onChangeHandler, onSubmitHandler, values}) => (
    <form
        className="ConfirmForm"
        onSubmit={onSubmitHandler}
    >
        <p>Confirm</p>
        <ValidatedInput 
            type="email"
            name="email"
            _placeholder="Your email address."
            onChange={onChangeHandler}
            value={values.email}
        />
        <ValidatedInput 
            type="text"
            name="code"
            _placeholder="Validation code sent to your email."
            onChange={onChangeHandler}
            value={values.code}
        />
        <Button
            color="blue"
        >
            Submit
        </Button>
    </form>
)
export default ConfirmComponent;