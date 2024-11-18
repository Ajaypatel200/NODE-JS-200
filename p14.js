function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    }

    return { evenCount, oddCount };
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = countEvenOdd(numbers);
console.log(`Even elements: ${result.evenCount}`);
console.log(`Odd elements: ${result.oddCount}`);
