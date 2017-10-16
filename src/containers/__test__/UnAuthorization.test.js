import React from 'react';
import { mount } from 'enzyme';
import { UnAuthorization } from '../UnAuthorization';
jest.useFakeTimers();
describe('', () => {
    let Wrapper;
    const mockTimer = jest.spyOn(UnAuthorization.prototype, 'timer');
    const mockPush = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <UnAuthorization 
                history={{
                    push: mockPush
                }}
            />
        )
    });
    afterEach(() => {
        jest.clearAllTimers();
    });
    afterAll(() => {
        Wrapper.detach();
    })
    it('should call this.timer 10times', () => {
        expect(Wrapper.state().redirectTime).toEqual(10);
        expect(mockTimer).toHaveBeenCalledTimes(0);
        jest.runTimersToTime(10000);
        expect(Wrapper.state().redirectTime).toEqual(0);
        expect(mockTimer).toHaveBeenCalledTimes(10);
    });
    it('should redirect route when all timer are run', () => {
        expect(mockPush).not.toHaveBeenCalled();
        jest.runTimersToTime(10100);
        expect(mockPush).toHaveBeenCalled();
    });
})