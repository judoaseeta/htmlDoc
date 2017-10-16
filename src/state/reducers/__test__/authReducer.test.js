import authReducer from '../authReducer';
import actionTypes from '../../actions/actionTypes';
import { Map } from 'immutable';
describe('authReducer', () => {
    it('should be update signin, token when signin', () => {
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
        const Reducer = authReducer(initialState, mockAction);
        expect(Reducer.get('auth').toJS()).toEqual(expected);
    });
    it('should be remove token when signout', () => {
        const mockUser = 'fwfewfewfew'
        const initialState = {
            isSignIn: false,
            user: null
        };
        const signInState = Map({
            'auth': Map({
                isSignIn: true,
                user: mockUser
            })
        })
        const mockAction = {
            type: actionTypes.AUTH_PROCEED.SIGN_OUT_PROCEEED
        };
        const Reducer = authReducer(signInState, mockAction);
        expect(Reducer.get('auth').toJS()).toEqual(initialState);
    });
});