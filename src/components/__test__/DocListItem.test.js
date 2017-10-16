import React from 'react';
import { shallow } from 'enzyme';
import DocListItem from '../DocListItem';
describe('<DocListItem />', () => {
    const mocksetDoc= jest.fn();
    const mockData = {
        title: 'dummy',
        content: "####heading4",
        createdAt: 3234324233423,
        docId: 'fefew',
        lastModified: 3233232
    }
    let Wrapper;
    beforeEach(() => {
        Wrapper = shallow(
            <DocListItem 
                setDoc={mocksetDoc}
                doc={mockData}
            />
        );
    })
    it('should invoke props onClickHandler', () => { 
        const Heading = Wrapper.find('h4');
        Heading.simulate('click');
        expect(mocksetDoc.mock.calls.length).toEqual(1);
        expect(mocksetDoc.mock.calls[0][0]).toEqual(mockData.docId);
    });
    it('should render prop data', () => {
        expect(Wrapper.find('h4').first().text()).toEqual(`Title: ${mockData.title}`);
        expect(Wrapper.find('p').first().text()).toEqual(`CreatedAt:${Date(mockData.createdAt)}`);
    });
});