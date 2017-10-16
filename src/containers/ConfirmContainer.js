import React, { Component } from 'react';
import ConfirmForm from '../components/Confirm';
import PropTypes from 'prop-types';
import { RegexUtil } from '../utils/regexUtils';
import '../styles/ConfirmContainer.scss';
export class ConfirmContainer extends Component {
        // the reason why using constructor here is
        // normal arrow function not binded in constructor
        // can't be mocked in testing suite. 
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        // this.historyListener = this.historyListener.bind(this);
        this.state = {
            email: '',
            code: '',
            emailError:'',
            codeError:'',
        }
    }
    render() {
        console.log(this.props);
        const values = {
            email: this.state.email,
            code: this.state.code
        }
        return (
            <div
                className="Authentication_container"
            >
                <ConfirmForm 
                    authType={this.props.authType}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    values={values}
                />   
            </div>
        );
    }
    onChangeHandler(e){
        const regexedValue = RegexUtil(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name + 'Error']: regexedValue,
        })
    }
    onSubmitHandler(e){
        e.preventDefault();
        const { email, emailError, code, codeError } = this.state;
        if(!email || !code || emailError || codeError) {
            return
        };
        this.props.confirmRequest(email, code);
    }
}
ConfirmContainer.propTypes = {
    confirmRequest: PropTypes.func.isRequired
}
export default ConfirmContainer;