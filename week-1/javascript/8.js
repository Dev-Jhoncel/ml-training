/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */
const getVowels = (str) => {
        let vowels = /[aeiou]/;
        return [...str].map(char => char.match(vowels)).join('');
}