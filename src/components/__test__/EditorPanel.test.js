import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import EditorPanel from '../EditorPanel';
describe('<EditorPanel />', () => {
    it('should have title and lastModified also button should fire onClick', () => {
        const mockTitle = 'LALA LAND';
        const mockLastModified = 13433313113;
        const mockOnSave = jest.fn();
        const expected = 'Title: LALA LAND';
        const Wrapper = shallow(
            <EditorPanel 
                title={mockTitle}
                lastModified={mockLastModified}
                onSave={mockOnSave}
            />
        );
        expect(Wrapper.find('h5').text()).toEqual(expected);
        expect(Wrapper.find('p').first().text()).toEqual(Date(mockLastModified));
        Wrapper.find(Button).simulate('click');
        expect(mockOnSave).toHaveBeenCalled();
    });
});