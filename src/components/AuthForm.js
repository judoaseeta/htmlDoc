import React from 'react';
import Button from './Button';
import '../styles/AuthForm.scss';
const AuthForm = (props) => (
    <form
        className="AuthForm"
        onSubmit={props.onSubmit}
    >
        {props.header ? props.header(props) : null}
        {props.children(props)}
        {props.footer ? props.footer(props) : null}
        <Button
            color={props.buttonColor || 'blue'}
        >Submit
        </Button>
    </form>
);
export default AuthForm;