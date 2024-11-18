    function reverseNumber(number) {
        const reversed = number.toString().split('').reverse().join('');
        return parseInt(reversed);
    }
    const number = 12345;
    const reversedNumber = reverseNumber(number);
    console.log(`The reverse of ${number} is: ${reversedNumber}`);
