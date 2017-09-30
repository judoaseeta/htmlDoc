import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<Button />', () => {
    it('should have proper props, onClickHandler', () => {
        const mockClickHandler = jest.fn();
        const Wrapper = shallow(
            <Button 
                color='red'
                onClick={mockClickHandler}
            />
        );
        expect(Wrapper.hasClass('red')).toBe(true);
        Wrapper.simulate('click')
        expect(mockClickHandler.mock.calls.length).toEqual(1);
    });
    it("should have '.disabled' when it is disabled", () => {
        const Wrapper = shallow(
            <Button 
                disabled
            />  
        );
        expect(Wrapper.hasClass('disabled')).toBe(true);
    });
});