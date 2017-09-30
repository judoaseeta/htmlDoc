import Toast from '../ToastReducer';
import actionTypes from '../../actions/actionTypes';
import { Map } from 'immutable';
describe('ToastReducer', () => {
    it('should be updated depending on actionTypes', () => {
        const initialState = Map({
            isToastOn: false,
            ToastMessage: ''
        });
        const mockMessage = 'hi there';
        const mockAction = {
            type: actionTypes.TOAST_CONTROL.TOAST_ON,
            payload: {
                message: mockMessage
            }
        }
        const expected = {
            isToastOn: true,
            ToastMessage: mockMessage
        }
        const Reducer = Toast(initialState, mockAction);
        expect(Reducer.toJS()).toEqual(expected);
    });
});