import actionTypes from '../actions/actionTypes'
import { SetDoc } from '../actions/doc';
import { docQuerySucceed } from '../actions/api_proceed';
import Toast from '../actions/toast';
import {call, put, select, take} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { getDoc,updateDoc, uploadDoc, queryDocs } from '../../utils/docApi';
export const getUser = state => state.auth.getIn(['auth', 'user']);
export function* workerForApi(apiFunc, ...arg) {
    const gettingUser = yield select(getUser);
    const userName = gettingUser.getUsername()
    try {
        const res = yield call(apiFunc, ...arg, userName);
        return res;
    } catch(e) {
        throw new Error(e.message);
    }
}
export function* watchGetDoc() {
    const { payload: {docId}} = yield take(actionTypes.DOC_CONTROL.SET_DOC_REQUEST);
    try {
        const item = yield call(workerForApi, getDoc, docId);
        yield put(SetDoc(item));
        yield put(Toast.toastOn(`Here is ${item.title}`));
        yield put(push(`/doc/${item.docId}`));
    } catch(e) {
        yield put(Toast.toastOn(e.message))
    }
}export function* watchGetDocfromComponent () {
    const { payload: {docId}} = yield take(actionTypes.DOC_CONTROL.SET_DOC_REQUEST);
    try {
        const item = yield call(workerForApi, getDoc, docId);
        yield put(SetDoc(item));
        yield put(Toast.toastOn(`Here is ${item.title}`));
        yield put(push(`/doc/${item.docId}`));
    } catch(e) {
        yield put(Toast.toastOn(e.message))
    }
}
export function* watchUpdateDoc() {
    const { payload: {doc}} =  yield take(actionTypes.API_REQUEST.UPDATE_DOC);
    try {
        const res = yield call(workerForApi, updateDoc, doc);
        if(res) {
            yield put(Toast.toastOn('Saved!'));
        }
    } catch(e) {
        yield put(Toast.toastOn(e.message))
    }
}
export function* watchUploadDoc() {
    const { payload: {title} } = yield take(actionTypes.API_REQUEST.CREATE_DOC);
    try {
        const item = yield call(workerForApi, uploadDoc, title);
        yield put(SetDoc(item));
        yield put(Toast.toastOn('Create your doc successfully!'));
        yield put(push(`/doc/${item.docId}`));
    } catch(e) {
        yield put(Toast.toastOn(e.message));
    }
}
export function* watchQueryDocs() {
    yield take (actionTypes.API_REQUEST.QUERY_DOCS);
    try {
        const List = yield call(workerForApi,queryDocs);
        yield put(docQuerySucceed(List));
        yield put(Toast.toastOn('Load your docs!'))
        yield put(push(`/doclist`))
    } catch(e) {
        yield put(Toast.toastOn(e.message));
    }
}