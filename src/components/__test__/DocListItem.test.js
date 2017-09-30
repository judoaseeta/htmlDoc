import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DocListItem from '../DocListItem';
configure({ adapter: new Adapter() });
describe('<DocListItem />', () => {
    const mockClickHandler = jest.fn();
    const mockData = {
        title: 'dummy',
        content: "####heading4",
        createdAt: 3234324233423
    }
    let Wrapper;
    beforeEach(() => {
        Wrapper = shallow(
            <DocListItem 
                onClickHandler={mockClickHandler}
                title={mockData.title}
                content={mockData.content}
                createdAt={mockData.createdAt}
            />
        );
    })
    it('should invoke props onClickHandler', () => { 
        const DocListItemComponent =  Wrapper;
        DocListItemComponent.simulate('click');
        expect(mockClickHandler.mock.calls.length).toEqual(1);
    });
    it('should render prop data', () => {
        const Title = Wrapper.find('h5').first().text();
        const Content = Wrapper.find('p').first().text();
        const ItemDate = Wrapper.find('p').at(1).text();
        expect(Title).toEqual(mockData.title);
        expect(Content).toEqual(mockData.content);
        expect(ItemDate).toEqual(String(mockData.createdAt));
    });
});