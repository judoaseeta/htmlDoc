import React from 'react';
import { mount } from 'enzyme';
import DocList from '../DocList';
import DocListItem from '../DocListItem';
import { ListTypeData } from './DocList.data';
describe('<DocList />', () => {
    let Wrapper;
    const mockSelectDoc = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <DocList 
                Docs={ListTypeData}
                setDoc={mockSelectDoc}
            />
        );
    })
    afterAll(() => {
        Wrapper.detach();
    })
    it('should render <DocListItem /> as many as Data.length', () => {
        expect(Wrapper.find(DocListItem).length).toEqual(ListTypeData.size);
    });
    it('should invoke selectDoc and pass doc id as argument to it when click DocListItem', () => {
        const FirstDocListItem =  Wrapper.find('h4').first();
        FirstDocListItem.simulate('click');
        expect(mockSelectDoc.mock.calls.length).toEqual(1);
        expect(mockSelectDoc.mock.calls[0][0]).toEqual(ListTypeData.get('0').docId);
    })
});