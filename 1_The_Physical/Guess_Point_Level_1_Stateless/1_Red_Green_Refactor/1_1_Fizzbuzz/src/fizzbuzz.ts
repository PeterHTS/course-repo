export function fizzbuzz(number: number) {

    if (isOutOfZeroToHundredRange(number)) 
        throw new RangeError('Value must be between 0 and 100, inclusive.');
    if ((number%3 === 0) && (number%5 === 0)) return 'FizzBuzz';
    if (number%3 === 0) return 'Fizz';
    if (number%5 === 0) return 'Buzz';
    return number.toString();
    
}

function isOutOfZeroToHundredRange(number: number):boolean {
    return ((number < 0) || (number > 100));
}