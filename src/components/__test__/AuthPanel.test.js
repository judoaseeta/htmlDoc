import React from 'react';
import AuthPanel from '../AuthPanel';
import { shallow } from 'enzyme';
describe('<AuthPanel />', () => {
    let Wrapper;
    const mockChangeRoute = jest.fn();
    beforeEach(() => {
        Wrapper = shallow(
            <AuthPanel 
                type='signin'
                changeRoute={mockChangeRoute}
            />
        )
    });
    it('should invoke changeRoute', () => {
        const SignUpButton = Wrapper.find('button').first();
        SignUpButton.simulate('click');
        expect(mockChangeRoute.mock.calls.length).toEqual(1);
    })
});