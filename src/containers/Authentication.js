import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import AuthFooter from '../components/AuthFooter';
import AuthHeader from '../components/AuthHeader';
import ValidatedInput from '../components/ValidatedInput';
import { RegexUtil } from '../utils/regexUtils';
import { withRouter } from 'react-router-dom';
import '../styles/Authentication.scss';
export class Authentication extends Component {
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
            password: '',
            emailError:'',
            passwordError:'',
        }
    }
    componentWillReceiveProps (nextProps) {
        if(this.props.location.pathname !== nextProps.location.pathname) {
            this.setState({
                email: '',
                password: '',
                emailError: '',
                passwordError:''
            });
        }
    }
    render() {
        const Errors = {
            email: this.state.emailError,
            password: this.state.passwordError
        };
        const Values = {
            email: this.state.email,
            password: this.state.password
        }
        const { id } = this.props.match.params;
        return (
            <div
                className="Authentication_container"
            >
                <AuthForm 
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    errors={Errors}
                    footer={({id}) => <AuthFooter id={id} />}
                    header={({id}) => <AuthHeader id={id} />}
                    id={id}
                    values={Values}
                >
                    {({errors, onChange, onSubmit, values}) => 
                        <div>
                            <ValidatedInput 
                                _placeholder="Type your email"
                                error={errors.email}
                                value={values.email}
                                onChange={onChange}
                                name="email"
                                type="text"
                            />
                            <ValidatedInput 
                                _placeholder="Type your password"
                                error={errors.password}
                                value={values.password}
                                onChange={onChange}
                                name="password"
                                type="password"
                            />
                        </div>
                    }
                </AuthForm>   
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
        const { id } = this.props.match.params;
        e.preventDefault();
        const { email, emailError, password, passwordError } = this.state;
        if(!email || !password || emailError || passwordError) {
            return
        };
        switch(id) {
            case 'signin': 
                this.props.signInRequest(email, password);
                break;
            case 'signup': 
                this.props.signUpRequest(email,password);
                break;
            default: break;
        }   
        ;
    }
}
export default withRouter(Authentication);