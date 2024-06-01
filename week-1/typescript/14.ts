/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
const arraySort = (arr: number[]):string  => {
    try
    {
        if(!(arr instanceof Array)) throw new Error('Inputs is not an Array')
        arr.map(num => { if(typeof num !== "number") throw new Error('Encountered a value with a non number data types') });
        arr = arr.sort((a,b) => a - b);
        return `The lowest number is ${arr[0]} and the highest number is ${arr[arr.length - 1]}.`
    }
    catch(error)
    {
        return (error as Error).message;
    }
}

console.log(arraySort([2,5,8,1,1.1,0.5,-1]));