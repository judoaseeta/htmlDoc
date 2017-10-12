import DocListReducer from '../DocListReducer';
import actionTypes from '../../actions/actionTypes';
import { List, Map } from 'immutable';
import MockDataList from './DocListReducer.data'; 
describe('DocListReducer testing', () => {
    it('should set DocList when Query is proceeded with initial state', () => {
        const initialState = Map({
            DocList: List([])
        });
        const mockAction = {
            type: actionTypes.API_PROCEED.QUERY_PROCEED,
            payload: {
                docList: MockDataList
            }
        }
        const expected = MockDataList;
        const mockReducer = DocListReducer(initialState, mockAction);
        expect(mockReducer.get('DocList').toJS()).toEqual(expected);
    });
})