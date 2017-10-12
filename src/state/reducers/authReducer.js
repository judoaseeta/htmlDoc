import actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';
const initialState = Map({
    'auth': Map({
        isSignIn: false,
        token: ''
    })
});
const authReducer = (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.AUTH_PROCEED.SIGN_IN_PROCEED:
        return state.setIn(['auth','isSignIn'], true)
                    .setIn(['auth','token'], action.payload.token)
    case actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED:
        return state.setIn(['auth','isSignIn'], false)
                    .setIn(['auth','token'], '')
    default: return state;
    }    
};
export default authReducer;