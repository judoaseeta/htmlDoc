import actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';
const initialState = Map({
    'auth': Map({
        isSignIn: false,
        user: null
    })
});
const authReducer = (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.AUTH_PROCEED.SIGN_IN_PROCEED:
        return state.setIn(['auth','isSignIn'], true)
                    .setIn(['auth','user'], action.payload.user)
    case actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED:
        return state.setIn(['auth','isSignIn'], false)
                    .setIn(['auth','user'], null)
    default: return state;
    }    
};
export default authReducer;