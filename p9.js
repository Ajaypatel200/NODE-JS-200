function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
