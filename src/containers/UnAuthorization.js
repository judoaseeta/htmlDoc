import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/UnAuthorization.scss';
export class UnAuthorization extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            redirectTime: 10,
        }
        this.timer = this.timer.bind(this);
    }
    componentDidMount() {
        this.setTimer = setInterval(this.timer, 1000);
        this.setTimeOut = setTimeout(() => {
            this.props.history.push("/auth/signin");
        }, 10100);
    }
    componentWillUnmount() {
        clearTimeout(this.setTimeOut);
        clearInterval(this.setTimer);
    }
    render() {
        return (
        <div
            className="unauthorization_container"
        >
            <div
                className="unauthorization_content"
            >
                <h4>You have no authrization</h4>
                <p>In order to use this app, please Sign in</p>
                <p>You will be redirected to SignIn page after\n
                <span id="clock">{this.state.redirectTime}</span> seconds.</p>
            </div>
        </div>
        );
    };
    timer() {
        this.setState({
            redirectTime: this.state.redirectTime - 1
        })
    }
};
export default withRouter(UnAuthorization);