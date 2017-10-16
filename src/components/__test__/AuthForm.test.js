import React from 'react';
import { mount } from 'enzyme';
import AuthForm from '../AuthForm';
import ValidatedInput from '../ValidatedInput';
describe('<AuthForm/> ', () => {
    let Wrapper;
    const mockOnChange = jest.fn();
    const mockOnSubmit = jest.fn();
    const mockErrors = {
        email: '',
        password: ''
    }
    const mockValues = {
        email: '',
        password: ''
    }
    beforeEach(() => {
        Wrapper = mount(
                <AuthForm 
                    onChange={mockOnChange}
                    onSubmit={mockOnSubmit}
                    header={({textvalue}) => <h1>{textvalue}</h1>}
                    textvalue="hi"
                    _placeholder="My Input"
                    errors={mockErrors}
                    values={mockValues}
                >
                {({errors, onChange,_placeholder, values}) => 
                    <ValidatedInput 
                        onChange={onChange}
                        error={errors.email}
                        _placeholder={_placeholder}
                        value={values.email}
                    />
                }
                </AuthForm>
        );
    });
    it('onChange should be invoked when types to input', () => {
        const testHeader = Wrapper.find('h1').first();
        expect(testHeader.text()).toEqual('hi');
    });
    it('onSubmit should be invoked when user submit', () => {
        const form = Wrapper.find('form');
        form.simulate('submit');
        expect(mockOnSubmit).toBeCalled();
    });
});