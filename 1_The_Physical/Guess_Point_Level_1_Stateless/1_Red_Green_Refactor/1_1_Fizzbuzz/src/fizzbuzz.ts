export function fizzbuzz(number: number) {
    if ((number%3 === 0) && (number%5 === 0)) return 'FizzBuzz';
    if (number%3 === 0) return 'Fizz';
    if (number%5 === 0) return 'Buzz';
    if((number > 0) && (number < 100)) return number.toString();
    return "";
}