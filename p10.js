function countCharacterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}
const inputString = "hello world";
const frequencyCount = countCharacterFrequency(inputString);
console.log(`Character frequency in "${inputString}":`, frequencyCount);
