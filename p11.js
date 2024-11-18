function isPalindromeNumber(num) {
    const str = num.toString(); 
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr; 
}
const number = 12321;
const result = isPalindromeNumber(number);
console.log(`The number ${number} is${result ? '' : ' not'} a palindrome.`);
