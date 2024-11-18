function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const inputString = "eegbdg";
const result = isPalindrome(inputString);
console.log(`The string "${inputString}" is${result ? '' : ' not'} a palindrome.`);
