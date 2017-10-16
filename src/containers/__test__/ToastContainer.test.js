import React from 'react';
import { ToastContainer }  from '../ToastContainer';
import { mount } from 'enzyme';
jest.useFakeTimers();
describe(('<ToastContainer />'), () => {
    let Wrapper;
    const initialMessage = 'hi,there';
    const mockCWR = jest.spyOn(ToastContainer.prototype, 'componentWillReceiveProps');
    const mockToastOff = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <ToastContainer
                isToastOn={false} 
                message={initialMessage}
                toastOff={mockToastOff}
            />
        )
    });
    afterAll(() =>{
        Wrapper.detach();
    });
    it('should call componentWillReceiveProps and toastoff when message is changed', () => {
        // change props in order to trigger componentWillReceiveProps.
        Wrapper.setProps({ isToastOn: true, message: 'bye,bye'});
        const container = Wrapper.find('.toast_container.on');
        expect(container.exists()).toBe(true);
        // check it is triggered.
        expect(mockCWR).toHaveBeenCalled();
        // settimeout activated and terminated.
        jest.runAllTimers();
        // toastoff is invoked after settimeout.
        expect(mockToastOff.mock.calls.length).toEqual(1);
    });
})