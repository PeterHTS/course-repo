import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('returns a string', () => {
        expect(typeof(fizzbuzz(5))).toBe('string');
    })

    it('returns Fizz for 3',() => {
        expect(fizzbuzz(3)).toEqual('Fizz');
    } )

    it('returns Buzz for 5',() => {
        expect(fizzbuzz(5)).toEqual('Buzz');
    })

    it('returns string "1" for 1',() => {
        expect(fizzbuzz(1)).toEqual('1');
    })

    it('returns Fizz for multiples of 3',() => {
        expect(fizzbuzz(6)).toEqual('Fizz');
    } )

    it('returns Buzz for multiples of 5',() => {
        expect(fizzbuzz(10)).toEqual('Buzz');
    })

    it('returns string FizzBuzz for multiples of 3 and 5',() => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
    })

    it('returns string "2" for 1',() => {
        expect(fizzbuzz(2)).toEqual('2');
    })

    it('returns string "Out of 0-100 range" for 1',() => {
        expect(fizzbuzz(101)).toEqual('Out of 0-100 range');
    })

});
