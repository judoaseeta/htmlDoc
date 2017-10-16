import React from 'react';
import { Authentication } from '../Authentication';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
describe("<Authentication />, /auth/signin", () => {
    let Wrapper;
    const mocksignIn = jest.fn();
    const mockParamId = {
        params: {
            id: 'signin'
        }
    }
    const mockSubmitHandler = jest.spyOn(Authentication.prototype,'onSubmitHandler');
    const mockChangeHandler = jest.spyOn(Authentication.prototype,'onChangeHandler');
    beforeEach(() => {
        Wrapper = mount(
            <MemoryRouter
                initialEntries={['/auth/signin']}
                initialIndex={0}
            >
                <Authentication 
                    signInRequest={mocksignIn}
                    match={mockParamId}
                />
            </MemoryRouter>
        );
    });
    afterAll(() => {
        Wrapper.detach();
    })
    it('should call onSubmit and request function depends on route parameter', () => {
        // given
        Wrapper.setState({
            email: 'judo@gmail.com',
            password: 'Bb1342412!',
            emailError: '',
            passwordError: '',
        });
        const Form = Wrapper.find('.AuthForm');
        Form.simulate('submit');
        // then mockSignIn should be invoked.
        expect(mockSubmitHandler).toHaveBeenCalled();
        expect(mocksignIn).toHaveBeenCalled();
        // What the fuck???
        expect(mocksignIn).toHaveBeenCalledWith('judo@gmail.com','Bb1342412!');
    });
});
