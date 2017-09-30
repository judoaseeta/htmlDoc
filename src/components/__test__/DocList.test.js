import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DocList from '../DocList';
import DocListItem from '../DocListItem';
import Data from './DocList.data';
configure({ adapter: new Adapter() });
describe('<DocList />', () => {
    it('should render <DocListItem /> as many as Data.length', () => {
        const Wrapper = shallow(
            <DocList 
                DocList={Data}
            />
        );
        const DocListItems =  Wrapper.find(DocListItem);
        expect(DocListItems.length).toEqual(Data.length);
    });
});