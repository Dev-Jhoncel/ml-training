/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */
const splitString = (str) => {
    let split_string = str.split(" ");
    let new_string = "";
    for(item of split_string){
        new_string += `${item.charAt(0).toUpperCase()}` + `${item.slice(1)} `;
    }
    new_string = new_string.replace(/\s+/g," ");
    return new_string;
}
console.log(splitString("The   quick   brown    fox jumps over the lazy dog"));