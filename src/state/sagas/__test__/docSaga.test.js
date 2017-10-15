import actionTypes from '../../actions/actionTypes';
import { getUser, watchGetDoc, watchQueryDocs, watchUploadDoc, workerForApi } from '../docSaga';
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
            .call(workerForApi, queryDocs)
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
            .call(workerForApi, queryDocs)
            .throw(new Error('Mr.Error'))
            .put(toast.toastOn('Mr.Error'))
            .next()
            .isDone()
    });
});
/// Still need to implement.