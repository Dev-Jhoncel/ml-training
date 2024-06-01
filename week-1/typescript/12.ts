/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

const checkEmptyArray = (arr:number[]):string => {
    try
    {
        if(arr instanceof Array)
        {
            if(arr.length === 0) throw new Error('Array is empty');
            arr.map(num => { if(typeof num !== "number") throw new Error('Encountered a value with a non number data types') });
            return 'Array is not empty'
        }
        return 'Parameter is not an Array'
    }
    catch(error)
    {
        return (error as Error).message;
    }
}

console.log(checkEmptyArray([]));