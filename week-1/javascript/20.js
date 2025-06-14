/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */
const fromatString = (str) => {

    let newString = [...str]
    let format_string = "";
    for(let newstr of newString)
    {
        format_string += `${(/[A-Z]/g).test(newstr)? newstr.toLowerCase() : newstr.toUpperCase() }`;
    }
    return format_string
}
console.log(fromatString("Hello World"));
