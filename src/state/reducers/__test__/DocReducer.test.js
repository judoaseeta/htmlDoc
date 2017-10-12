import DocReducer from '../DocReducer';
import actionTypes from '../../actions/actionTypes';
import { Map } from 'immutable';
describe('DocReducer', () => {
    it('action.type === SET_DOC', () => {
        const initialState = Map({
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
        }
        const expected = {
            title: mockTitle,
            createdAt: mockDate,
            lastModified: null,
            content: '',
            docId: mockDocId
        }
        const Reducer =  DocReducer(initialState, mockAction);
        expect(Reducer.toJS()).toEqual(expected);
    });
    it('action.type === SET_CONTENT',() => {
        const initialState = Map({
            'doc': Map({
                createdAt: 1313131313,
                content: '',
                lastModified: null,
                docId: 'a1a1',
                title: 'about kelly'        
            })
        })
        const mockContent = 'hihihiihihihi';
        const mockAction = {
            type: actionTypes.DOC_CONTROL.SET_CONTENT,
            payload: {
                content: mockContent
            }
        }
        const Reducer = DocReducer(initialState, mockAction);
        expect(Reducer.get('content')).toEqual(mockContent);
    })
});