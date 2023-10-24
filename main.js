/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const [startDateStr, endDateStr] = dates;
    const startDate = new Date(startDateStr.split('.').reverse().join('-'));
    const endDate = new Date(endDateStr.split('.').reverse().join('-'));

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const monthLength = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        days += monthLength;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate the total number of days between two dates
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

    // Generate output string
    let output = '';

    if (years > 0) {
        output += `${years} ${years === 1 ? 'year' : 'years'}, `;
    }

    if (months > 0) {
        output += `${months} ${months === 1 ? 'month, ' : 'months, '}`;
    }

    output += `total ${totalDays} days`;

    return output;
}