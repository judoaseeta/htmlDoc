import actionTypes from './actionTypes';
const toastOn = (message) => {
    return {
        type: actionTypes.TOAST_CONTROL.TOAST_ON,
        payload: {
            message: message
        }
    }
}
const toastOff = () => {
    return {
        type: actionTypes.TOAST_CONTROL.TOAST_OFF
    }
}
export default {
    toastOn,
    toastOff
}