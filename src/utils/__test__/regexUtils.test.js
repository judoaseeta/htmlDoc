import { RegexUtil } from '../regexUtils';

describe('testing regexUtils', () => {
    it('in case of email address', () => {
        const mockValue = 'fewfewwe@';
        const expected = "It's not an email address.";
        const regexReturn = RegexUtil('email', mockValue);
        expect(regexReturn).toEqual(expected);
    });
    it('in case of password', () => {
        const mockValue = 'aaaaaaaa';
        const expected = 'Password should have at least one Uppercase and Special-letter and number';
        const regexReturn = RegexUtil('password', mockValue);
        expect(regexReturn).toEqual(expected);
    })
});