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

    it('should not throw an error if the value is within the valid range', () => {
        expect(() => fizzbuzz(50)).not.toThrow();
    });
    
    it('should throw a RangeError if the value is less than 0', () => {
        expect(() => fizzbuzz(-1)).toThrow(RangeError);
        expect(() => fizzbuzz(-1)).toThrow('Value must be between 0 and 100, inclusive.');
    });

    test('should throw a RangeError if the value is greater than 100', () => {
        expect(() => fizzbuzz(101)).toThrow(RangeError);
        expect(() => fizzbuzz(101)).toThrow('Value must be between 0 and 100, inclusive.');
    });

    test('should throw a RangeError if the value is greater than 100 even if its multiple 3 and 5', () => {
        expect(() => fizzbuzz(150)).toThrow(RangeError);
        expect(() => fizzbuzz(150)).toThrow('Value must be between 0 and 100, inclusive.');
    });

});
