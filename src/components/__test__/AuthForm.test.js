import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import AuthForm from '../AuthForm';
import Input from '../Input';
configure({ adapter: new Adapter() });
describe('<AuthForm/> ', () => {
    let Wrapper;
    const mockOnChange = jest.fn();
    const mockOnSubmit = jest.fn();
    beforeEach(() => {
        Wrapper = shallow(
            <AuthForm 
                onChangeHandler={mockOnChange}
                onSubmitHandler={mockOnSubmit}
            />
        );
    });
    it('onChange should be invoked when types to input', () => {
        const input = Wrapper.find(Input).first();
        const mockType = {
            target: {
                value: 'hi'
            }
        };
        input.simulate('change', mockType);
        expect(mockOnChange.mock.calls[0][0]).toEqual(mockType);
    });
    it('onSubmit should be invoked when user submit', () => {
        const form = Wrapper.find('form').first();
        const mockEvent = {
            email: {
                value: 'judoaseeta@naver.com'
            },
            password: {
                value: '111321'
            }
        }
        form.simulate('submit', mockEvent);
        expect(mockOnSubmit.mock.calls[0][0]).toEqual(mockEvent);
    });
});