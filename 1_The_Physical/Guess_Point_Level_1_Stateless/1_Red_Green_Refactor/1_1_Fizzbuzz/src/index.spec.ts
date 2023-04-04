import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('returns a string', () => {
        expect(typeof(fizzbuzz(5))).toBe('string');
    })

    it('returns Fizz for 3',() => {
        expect(fizzbuzz(3)).toEqual('Fizz');
    } )

});
