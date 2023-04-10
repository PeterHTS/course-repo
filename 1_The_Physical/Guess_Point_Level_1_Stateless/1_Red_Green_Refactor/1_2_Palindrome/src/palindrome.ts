export function isPalindrome(input: string):boolean {
    return input.split('').every((char, i) => {
        return char === input[input.length - i -1];
    });
}