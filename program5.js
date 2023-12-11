//reverse a string

function reverseNumber(number) {
    const reversedString = parseFloat(number.toString().split("").reverse().join(""))* Math.sign(number);
    return reversedString;
}

console.log(reverseNumber(-123));