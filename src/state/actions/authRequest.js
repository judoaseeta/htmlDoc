import actionTypes from './actionTypes';
export const confirmRequest = (email, code) => {
    return {
        type: actionTypes.AUTH_REQUEST.REQUEST_CONFIRM,
        payload: {
            email,
            code
        }
    }
}
export const signInRequest = (email, password) => {
    return {
        type:actionTypes.AUTH_REQUEST.REQUEST_SIGN_IN,
        payload: {
            email,
            password
        }
    }
};
export const signUpRequest = (email, password) => {
    return {
        type:actionTypes.AUTH_REQUEST.REQUEST_SIGN_UP,
        payload: {
            email,
            password
        }
    }
};
export const signOutRequest = () => {
    return {
        type: actionTypes.AUTH_REQUEST.REQUEST_SIGN_OUT
    }
}
export const requestCurrentUser = () =>{
    return {
        type: actionTypes.AUTH_REQUEST.REQUEST_CURRENT_USER
    }
}