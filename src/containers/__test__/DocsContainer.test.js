import React from 'react';
import { mount } from 'enzyme';
import { DocsContainer } from '../DocsContainer';
import { ListTypeData } from '../../components/__test__/DocList.data';
describe('<DocsContainer />', () => {
    let Wrapper;
    const mockSetDoc = jest.fn();
    const mockUploadDoc = jest.fn();
    const mockqueryDocs = jest.fn();
    const mockDidMount = jest.spyOn(DocsContainer.prototype, 'componentDidMount');
    const mockNewDocSwitcher = jest.spyOn(DocsContainer.prototype, 'NewDocSwitcher');
    beforeEach(() => {
        Wrapper = mount(
                <DocsContainer 
                    DocList={ListTypeData}
                    setDoc={mockSetDoc}
                    uploadDoc={mockUploadDoc}
                    queryDocs={mockqueryDocs}
                    isSignIn={true}
                />
        );
    });
    afterAll(() => {
        Wrapper.detach();
    });
    it('should call queryDocs when component is mounted', () => {
        expect(mockDidMount).toHaveBeenCalled();
        // and it should call queryDocs
        expect(mockqueryDocs).toHaveBeenCalled();
    });
})