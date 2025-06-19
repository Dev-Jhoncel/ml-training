/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */
const convertFtoC = (fahrenheit) => {
    return `${fahrenheit}°F = ${(fahrenheit - 32) * 5/9}°C`;
}

console.log(convertFtoC(140));
