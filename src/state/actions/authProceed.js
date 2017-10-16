import actionTypes from './actionTypes';
export const signInSuccess = (user) => {
    return {
        type: actionTypes.AUTH_PROCEED.SIGN_IN_PROCEED,
        payload: {
            user
        }
    }
}
export const signOutProceed = () => {
    return {
        type: actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED
    }
}