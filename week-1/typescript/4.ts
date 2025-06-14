/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */
const currentDate  = (): string => {
    let date = new Date();
    let current_month = (String(date.getMonth()).length === 2)? date.getMonth() : '0' + date.getMonth();
    let current_day = (String(date.getDate()).length === 2)? date.getDate() : '0' + date.getMonth();
    let current_date = `${current_month}-${current_day}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return `${current_date}`;
} 

console.log(currentDate());