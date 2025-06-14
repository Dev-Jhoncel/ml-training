/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */
const checkIfNumber = (num: any): string => {
    try
    {
        if(typeof num !== "number"){
            throw new Error('Your input is not an integer');
        }
        return "Your input is an integer"
    }
    catch(err)
    {
        return `${(err as Error).message}`
    }
}

console.log(checkIfNumber("2"));