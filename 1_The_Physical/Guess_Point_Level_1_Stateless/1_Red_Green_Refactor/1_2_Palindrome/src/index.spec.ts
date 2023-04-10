import {isPalindrome} from "./palindrome";

describe('palindrome checker', () => {
    it('should return true if the palindrome method is defined', () => {
        expect(isPalindrome('mom')).toBeDefined;
    })

    it('should return true if input is mom', ()=> {
        expect(isPalindrome('mom')).toBe(true);
    })

    it('should return false if the input is bill', ()=> {
        expect(isPalindrome('bill')).toBe(false);
    })

    it('should return true if input is wow', ()=> {
        expect(isPalindrome('wow')).toBe(true);
    })
 
    it('should return true if input is Mom', ()=> {
        expect(isPalindrome('Mom')).toBe(true);
    }) 
})

