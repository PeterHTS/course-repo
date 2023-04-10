export function isPalindrome(input: string):boolean {
    const regExp = /[\W_]/g;
    var cleanInput = input.toLowerCase().replace(regExp, '');
    return cleanInput.split('').every((char, i) => {
        return char === cleanInput[cleanInput.length - i -1];
    });
}