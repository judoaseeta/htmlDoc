import React from 'react';
import Input from './Input';
import Button from './Button';
const AuthForm = ({onChangeHandler,onSubmitHandler}) => (
    <form
        onSubmit={onSubmitHandler}
    >
        <label
            htmlFor="email"
        >E-mail
        </label>
        <Input 
            type="email"
            name="email"
            onChange={onChangeHandler}
        />
        <label
            htmlFor="password"
        >
        Password
        </label>
        <Input 
            type="password"
            name="password"
            onChange={onChangeHandler}
        />
        <Button
            color='blue'
        >Submit
        </Button>
    </form>
);
export default AuthForm;