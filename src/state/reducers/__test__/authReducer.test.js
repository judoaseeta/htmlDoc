import authReducer from '../authReducer';
import actionTypes from '../../actions/actionTypes';
import { Map } from 'immutable';
describe('authReducer', () => {
    it('should be update signin, token when signin', () => {
        const initialState = Map({
            'auth': Map({
                isSignIn: false,
                token: ''
            })
        });
        const mockToken = 'adsvvawewfewf';
        const mockAction = {
            type: actionTypes.AUTH_PROCEED.SIGN_IN_PROCEED,
            payload: {
                token: mockToken
            }
        }
        const expected = {
            isSignIn: true,
            token: mockToken
        };
        const Reducer = authReducer(initialState, mockAction);
        expect(Reducer.get('auth').toJS()).toEqual(expected);
    });
    it('should be remove token when signout', () => {
        const initialState = {
            isSignIn: false,
            token: ''
        };
        const signInState = Map({
            'auth': Map({
                isSignIn: true,
                token: 'fwfewfewfew'
            })
        })
        const mockAction = {
            type: actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED
        };
        const Reducer = authReducer(signInState, mockAction);
        expect(Reducer.get('auth').toJS()).toEqual(initialState);
    });
});