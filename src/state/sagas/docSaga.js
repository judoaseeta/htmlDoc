import actionTypes from '../actions/actionTypes'
import { SetDoc } from '../actions/doc';
import { docQuerySucceed } from '../actions/api_proceed';
import Toast from '../actions/toast';
import {call, put, take,takeEvery} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getDoc,updateDoc, uploadDoc, queryDocs } from '../../utils/docApi';
export function* getDocWorker(action) {
    try {
        const item = yield call(getDoc, action.payload.docId);
        yield put(SetDoc(item));
        yield put(Toast.toastOn(`Here is ${item.title}`));
        yield put(push(`/doc/${item.docId}`));
    } catch(e) {
        yield put(Toast.toastOn(e.message))
    }
}
export function* watchGetDoc() {
    yield takeEvery(actionTypes.DOC_CONTROL.SET_DOC_REQUEST, getDocWorker);
}
export function* watchUpdateDoc() {
    const { payload: {doc} } = yield take(actionTypes.API_REQUEST.CREATE_DOC);
    try {
        const item = yield call(updateDoc, doc);
        yield put(SetDoc(item));
        yield put(Toast.toastOn('Updated!'));
    } catch(e) {
        yield put(Toast.toastOn(e.message));
    }
}
export function* watchUploadDoc() {
    const { payload: {title} } = yield take(actionTypes.API_REQUEST.CREATE_DOC);
    try {
        const item = yield call(uploadDoc, title);
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
        const List = yield call(queryDocs);
        yield put(docQuerySucceed(List));
        yield put(Toast.toastOn('Load your docs!'))
        yield put(push(`/doclist`))
    } catch(e) {
        yield put(Toast.toastOn(e.message));
    }
}