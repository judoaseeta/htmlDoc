import { push } from 'react-router-redux';
import actionTypes from '../actions/actionTypes';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects'
import { getCurrentUser, getUserToken, signIn, signup } from '../../utils/authentication';
import Toast from '../actions/toast';
import { signInSuccess, signOutProceed } from '../actions/authProceed';
function* getSignedUser() {
    try {
    const user = getCurrentUser();
    if (user !== null) {
            yield put(signInSuccess(user));
            yield put(Toast.toastOn('Welcome Back'))
    } 
    }catch(e) {
            yield put(Toast.toastOn(e.message))
    }
}
function* signInSaga({payload}) {
    const { email, password } = payload;
    try {
        const userIsValid = yield call(signIn, email, password);
            if(userIsValid) {
                const user = yield fork(getSignedUser);
                yield put(signInSuccess(user));
                yield put(push('/'));
                yield put(Toast.toastOn('Sign In'));
            }
    } catch(e) {
        if(e.message.includes('confirmed')){
            yield put(push('/auth/confirm'));
        }
        yield put(Toast.toastOn(e.message))
    }
}
function* signUpSaga({payload}) {
    const { email, password } = payload;
    try {
        yield call(signup, email, password);
        yield put(push('/auth/confirm'));
    } catch(e) {
        yield put(Toast.toastOn(e.message));
    }
}
function* signOutSaga() {
    const user = getCurrentUser();
    try {
        if (user !== null) {
            yield user.signOut();
            yield put(signOutProceed());
            yield put(Toast.toastOn('Sign out!'))
        } 
    } catch(e) {
        yield put(Toast.toastOn(e.message))
    }
}
export function* watchSignIn() {
    yield takeLatest(actionTypes.AUTH_REQUEST.REQUEST_SIGN_IN, signInSaga);
}
export function* watchSignUp() {
    yield takeLatest(actionTypes.AUTH_REQUEST.REQUEST_SIGN_UP, signUpSaga);
}
export function* watchSignOut() {
    yield take(actionTypes.AUTH_REQUEST.REQUEST_SIGN_OUT)
    yield call(signOutSaga)
}
export function* watchAuthFlow() {
    while(true) {
        yield take(actionTypes.AUTH_REQUEST.REQUEST_CURRENT_USER);
        yield fork(getSignedUser);        
    }
}