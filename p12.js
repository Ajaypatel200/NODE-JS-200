function findLargestElement(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }

    return largest; 
}
const numbers = [5, 3, 8, 1, 2, 7];
const largestElement = findLargestElement(numbers);
console.log(`The largest element in the array is: ${largestElement}`);
