export function fizzbuzz(number: number) {
    if (number%3 === 0) return 'Fizz';
    if (number%5 === 0) return 'Buzz';
    if(number ===1) return '1';
    return "";
}