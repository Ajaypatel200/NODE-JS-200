function countVowels(str) {
    const vowelPattern = /[aeiou]/gi;
    const matches = str.match(vowelPattern);
    return matches ? matches.length : 0;
}
const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);
