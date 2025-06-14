/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */
const ifPositiveInteger = (num) => {
    try
    {
        if(num < 0){
            throw new Error('The number you inputted is not a positive integer');
        }
        return 'The number you inputted is a positive integer';
    }
    catch(error)
    {
        return `${error.message}`;
    }
}
console.log(ifPositiveInteger(-1));