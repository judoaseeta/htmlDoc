import React from 'react';
import { Prompter } from '../Prompter';
import { mount } from 'enzyme';
describe('<Prompter />', () => {
    let Wrapper;
    const mockPush = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <Prompter 
                history={{
                    push: mockPush
                }}
                YesPath='/auth/signin'
                NoPath='/'
            />
        )
    });
    afterAll(() => {
        Wrapper.detach();
    })
    it("should push to '/auth/signin' when click yes...", () => {
        const Yes = Wrapper.find('button').first();
        Yes.simulate('click');
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith('/auth/signin');
    });
    it("should push to '/' when click no...", () => {
        const Yes = Wrapper.find('button').last();
        Yes.simulate('click');
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith('/');
    });
})