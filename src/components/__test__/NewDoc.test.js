import React from 'react';
import NewDoc from '../NewDoc';
import { mount } from 'enzyme';
describe('<NewDoc />', () => {
    let Wrapper;
    const mockOnChange = jest.fn();
    const mockOnSubmit = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <NewDoc 
                title="hello"
                onChange={mockOnChange}
                onSubmit={mockOnSubmit}
            />
        );
    });
    afterAll(() => {
        Wrapper.detach();
    })
    it('should invoke OnChange when types to input', () => {
        // given
        const Input = Wrapper.find('input');
        // when
        Input.simulate('change');
        // then
        expect(mockOnChange).toBeCalled();
    });
    it('should invoke onSubmit  when submit ', () => {
        // given
        const Form = Wrapper.find('form');
        // when
        Form.simulate('submit');
        // then
        expect(mockOnSubmit).toBeCalled();
    });
});