import actionTypes from '../actions/actionTypes';
import { List, Map } from 'immutable';
const initialState = Map({
    DocList: List([])
});
const DocListReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.API_PROCEED.QUERY_PROCEED: 
            return state.mergeIn(['DocList'], List(action.payload.docList))
        default: return state;
    }
};
export default DocListReducer;