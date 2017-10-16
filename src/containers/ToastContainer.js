import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toast from '../state/actions/toast';
import '../styles/Toast.scss';
const mapStateToProps = (state) => {
    return {
        isToastOn: state.toast.getIn(['toast','isToastOn']),
        message: state.toast.getIn(['toast', 'ToastMessage'])
    }
}
export class ToastContainer extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        if(this.props.message !== nextProps.message) {
            this.timer = setTimeout(() => {
                this.props.toastOff();
                clearTimeout(this.timer);
            }, 4000)
        }
    }
    render() {
        const { isToastOn, message, toastOff } =  this.props;
        return (
            <div
                className={`toast_container ${isToastOn ? 'on' : ''}`}
            >
                <div
                    className="toast_container_content"
                >
                    <p>{message ? message : 'hi there'}</p>
                </div>   
                <span 
                    className="toast_container_closebutton"
                    onClick={toastOff}
                >
                <i className="fa fa-times fa-2x" aria-hidden="true" />
                </span>
            </div>
        )
    }
}
ToastContainer.propTypes = {
    isToastOn: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    toastOff: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { toastOff: Toast.toastOff })(ToastContainer);