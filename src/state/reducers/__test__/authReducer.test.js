import authReducer from '../authReducer';
import actionTypes from '../../actions/actionTypes';
import { Map } from 'immutable';
describe('authReducer', () => {
    it('should be update signin, token when signin', () => {
        const initialState = Map({
            isSignIn: false,
            token: '',
            signUpUser: null
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
            token: mockToken,
            signUpUser: null
        };
        const Reducer = authReducer(initialState, mockAction);
        expect(Reducer.toJS()).toEqual(expected);
    });
    it('should be remove token when signout', () => {
        const initialState = {
                isSignIn: false,
                token: '',
                signUpUser: null
        };
        const signInState = Map({
            isSignIn: true,
            token: 'fwfewfewfew',
            signUpUser: null
        })
        const mockAction = {
            type: actionTypes.AUTH_REQUEST.REQUEST_SIGN_OUT
        };
        const Reducer = authReducer(signInState, mockAction);
        expect(Reducer.toJS()).toEqual(initialState);
    });
});