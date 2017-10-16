import React from 'react';
import { shallow } from 'enzyme';
import ValidatedInput from '../ValidatedInput';
describe('<ValidatedInput />', () => {
    let Wrapper;
    const mockPropsOnChangeHandler = jest.fn();
    const mockinitialError = ''
    beforeEach(() => {
        Wrapper = shallow(
                <ValidatedInput 
                    onChange={mockPropsOnChangeHandler}
                    error={mockinitialError}
                    _placeholder="testing validatedInput"
                />
        )
    });
    it('should invoke onChangeHandler when types to input', () => {
        const Input = Wrapper.find('input');
        Input.simulate('change');
        expect(mockPropsOnChangeHandler).toBeCalled();
    });
    it("should indicate error when it's happened", () => {
        Wrapper.setProps({ error: 'too long!'});
        const errorMessage = Wrapper.find('.ValidatedInput_error');
        expect(errorMessage.text()).toEqual('too long!');
    });
});