function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
const number = 7;
const result = checkEvenOrOdd(number);
console.log(`The number ${number} is: ${result}`);
