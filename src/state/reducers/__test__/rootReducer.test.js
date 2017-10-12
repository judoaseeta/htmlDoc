import rootReducer from '../';
import { createStore } from 'redux';
describe('combineReducer', () => {
    it('getStates', () => {
        const store = createStore(rootReducer);
        const initialAuthState = {
            isSignIn: false,
            token: ''
        };
        expect(store.getState().auth.get('auth').toJS()).toEqual(initialAuthState);
    });
});