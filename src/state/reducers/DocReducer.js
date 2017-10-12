import actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';
const initialState = Map({
        createdAt: null,
        content: '',
        docId: '',
        lastModified: null,
        title: ''
});
const DocReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.DOC_CONTROL.SET_DOC:
            return state.set('createdAt', action.payload.doc.createdAt)
                        .set('title', action.payload.doc.title)
                        .set('content', action.payload.doc.content)
                        .set('docId', action.payload.doc.docId)
                        .set('lastModified', action.payload.doc.lastModified)
        case actionTypes.DOC_CONTROL.SET_CONTENT:
            return state.set('content', action.payload.content)
        case actionTypes.DOC_CONTROL.SET_TITLE:
            return state.set('title', action.payload.title)
        default: return state;
    }
};
export default DocReducer;