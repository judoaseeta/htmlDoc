import { createSelector } from 'reselect';
const isSignIn = state => state.auth.getIn(['auth', 'isSignIn']);
const User = state => state.auth.getIn(['auth', 'user']);
const DocList =  state => state.docs.get('DocList');
const getIsToastOn = state => state.toast.getIn(['toast', 'isToastOn']);
const getToastMessage = state => state.toast.getIn(['toast', 'ToastMessage']);
export const getAuth = () => {
    return createSelector(
        [isSignIn, User],
        (isSignIn, user) => {
            return {
                isSignIn,
                user
            }
        }
    )
}
export const getDocList = () => {
    return createSelector(
        [DocList],
        doclist => doclist
    )
}
export const getToast = () => {
    return createSelector(
        [getIsToastOn, getToastMessage],
        (isToastOn, message )=> {
            return {
                isToastOn,
                message
            } 
        }
    )
}