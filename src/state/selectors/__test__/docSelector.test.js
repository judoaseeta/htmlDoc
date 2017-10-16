import docSelector from '../docSelector';
import docReducer from '../../reducers/DocReducer';
import actionTypes from '../../actions/actionTypes'; 
import { Map } from 'immutable';
describe('docSelector', () => {
    it('should return new values as reducer is invoked', () => {
        // assume created doc.
        const initialDocState = Map({
            createdAt: null,
            content: '',
            lastModified: null,
            docId: '',
            title: ''
        });
        const mockTitle = 'my title'
        const mockDate = Date.now();
        const mockDocId = 'fewewefwefw';
        const mockAction = {
            type: actionTypes.DOC_CONTROL.SET_DOC,
            payload: {
                doc: {
                    title: mockTitle,
                    createdAt: mockDate,
                    content: '',
                    docId: mockDocId,
                    lastModified: null
                }
            }
        };
        const expected = {
            title: mockTitle,
            createdAt: mockDate,
            lastModified: null,
            content: '',
            docId: mockDocId
        }
        const state = {
            doc: docReducer(initialDocState, mockAction)
        };
        const mockSelector = docSelector();
        expect(mockSelector(state)).toEqual(expected);
        // when new action is dispatched.
        const initialDocState2 = Map({
            title: mockTitle,
            createdAt: mockDate,
            lastModified: null,
            content: '',
            docId: mockDocId
        });
        const mockContent = '#### My life is harsh...';
        const mockAction2 = {
            type: actionTypes.DOC_CONTROL.SET_CONTENT,
            payload : {
                content: mockContent
            }
        }
        const state2 = {
            doc: docReducer(initialDocState2, mockAction2)
        };
        const expected2 = {
            title: mockTitle,
            createdAt: mockDate,
            lastModified: null,
            content: mockContent,
            docId: mockDocId
        };
        const mockSelector2 = docSelector();
        expect(mockSelector2(state2)).toEqual(expected2);
    });
});