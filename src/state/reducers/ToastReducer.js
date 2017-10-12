import actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';
const initialState = Map({
    toast: Map({
        isToastOn: false,
        ToastMessage: ''
    })
});
const Toast = (state = initialState, action ) => {
    if(action.type === actionTypes.TOAST_CONTROL.TOAST_ON) {
        return state.mergeIn(['toast'],Map({
            isToastOn: true,
            ToastMessage: action.payload.message
        }))
    } else if(action.type === actionTypes.TOAST_CONTROL.TOAST_OFF) {
        return state.mergeIn(['toast'],Map({
            isToastOn: false,
            ToastMessage: ''
        }))
    }
    return state;
}
export default Toast;