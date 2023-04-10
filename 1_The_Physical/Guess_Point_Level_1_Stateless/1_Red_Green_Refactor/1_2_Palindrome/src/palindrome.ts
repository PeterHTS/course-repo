export function isPalindrome(input: string):boolean {
    return input.split('').every((char, i) => {
        return char.toLowerCase() === input[input.length - i -1].toLowerCase();
    });
}