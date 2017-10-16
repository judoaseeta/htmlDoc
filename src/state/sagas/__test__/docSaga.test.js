import actionTypes from '../../actions/actionTypes';
import { getUser,getDocWorker, watchGetDoc, watchQueryDocs, watchUploadDoc, workerForApi } from '../docSaga';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { docQuerySucceed } from '../../actions/api_proceed';
import { SetDoc } from '../../actions/doc';
import toast from '../../actions/toast';
import { push } from 'react-router-redux';
import { getDoc,updateDoc, uploadDoc, queryDocs } from '../../../utils/docApi';
describe('testing doc saga', () => {
    it('testing querydocs saga when fetching docs', () => {
        const saga = testSaga(watchQueryDocs)
        saga.next()
            .take(actionTypes.API_REQUEST.QUERY_DOCS)
            .next()
            .call(queryDocs)
            .next(['a','b'])
            .put(docQuerySucceed(['a','b']))
            .next()
            .put(toast.toastOn('Load your docs!'))
            .next()
            .put(push('/doclist'))
            .next()
            .isDone()
    });
    it('testing querydocs saga when fetching docs is failed', () => {
        const saga = testSaga(watchQueryDocs)
        saga.next()
            .take(actionTypes.API_REQUEST.QUERY_DOCS)
            .next()
            .call(queryDocs)
            .throw(new Error('Mr.Error'))
            .put(toast.toastOn('Mr.Error'))
            .next()
            .isDone()
    });
    it('testing watchGetdoc saga when invoke getDocWorker', () => {
        const saga = testSaga(watchGetDoc);
        saga.next()
            .takeEveryEffect(actionTypes.DOC_CONTROL.SET_DOC_REQUEST, getDocWorker)
    });
    it('testing getDocWorker', () => {
        const action = {
            type: actionTypes.DOC_CONTROL.SET_DOC_REQUEST,
            payload: {
                docId: '$#$#$$#$#'
            }
        }
        const mockResult = {
            title: `i'm your father`,
            content: '### jedi is return',
            createdAt: 4244242545,
            lastModified: null,
            userId: '#erewre',
            dociD: '$#$#$$#$#'
        }
        const saga = testSaga(getDocWorker, action)
        saga.next()
            .call(getDoc, action.payload.docId)
            .next(mockResult)
            .put(SetDoc(mockResult))
            .next()
            .put(toast.toastOn(`Here is ${mockResult.title}`))
            .next()
            .put(push(`/doc/${mockResult.docId}`))
            .next()
            .isDone()
    });
});
/// Still need to implement.