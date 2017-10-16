import {getAuth, getDocList} from '../appSelector';
import authReducer from '../../reducers/authReducer';
import DocListReducer from '../../reducers/DocListReducer';
import actionTypes from '../../actions/actionTypes';
import MockDataList from '../../reducers/__test__/DocListReducer.data';
import { List, Map } from 'immutable';
describe('appSelector', () => {
    it('testing authSelector', () => {
        const initialState = Map({
            'auth': Map({
                isSignIn: false,
                user: null
            })
        });
        const mockUser = 'adsvvawewfewf';
        const mockAction = {
            type: actionTypes.AUTH_PROCEED.SIGN_IN_PROCEED,
            payload: {
                user: mockUser
            }
        }
        const expected = {
            isSignIn: true,
            user: mockUser
        };
        const state = {
            auth: authReducer(initialState, mockAction)
        }
        const authSelector =  getAuth();
        expect(authSelector(state)).toEqual(expected);
        // when new action is dispatched.
        const initialState2 = Map({
            'auth': Map({
                sSignIn: true,
                user: mockUser
            })
        });
        const mockAction2 = {
            type: actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED
        };
        const expected2 = {
            isSignIn: false,
            user: null
        };
        const state2 = {
            auth: authReducer(initialState2, mockAction2)
        };
        const authSelector2 =  getAuth();
        expect(authSelector2(state2)).toEqual(expected2);
    });
    it('testing docListSelector', () => {
        const initialState = Map({
            DocList: List([])
        });
        const initialAction = {
            type: actionTypes.API_PROCEED.QUERY_PROCEED,
            payload: {
                docList: []
            }
        }
        const state = {
            docs: DocListReducer(initialState, initialAction)
        }
        const docListSelector = getDocList();
        expect(docListSelector(state)).toEqual(List([]));
        // when new action is dispatched.
        const initialState2 = Map({
            DocList: List([])
        });
        const mockAction = {
            type: actionTypes.API_PROCEED.QUERY_PROCEED,
            payload: {
                docList: MockDataList
            }
        };
        const state2= {
            docs: DocListReducer(initialState2,mockAction)
        };
        const docListSelector2 = getDocList();
        expect(docListSelector2(state2)).toEqual(List(MockDataList));
    });
});