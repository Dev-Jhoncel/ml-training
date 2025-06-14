/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */
const convertCtoF = (celsius: number):string => {
    return `${celsius}°C = ${(celsius * 9/5) + 32}°F`;
}

console.log(convertCtoF(30));