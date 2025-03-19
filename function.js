function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 5));

function subtract(a, b) {
    return a - b;
}
console.log("Subtraction:", subtract(10, 5));

function multiply(a, b) {
    return a * b;
}
console.log("Multiplication:", multiply(10, 5));

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
console.log("Division:", divide(10, 5));

function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 10 even?", isEven(10));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse of 'hello':", reverseString('hello'));

function findMax(arr) {
    return Math.max(...arr);
}
console.log("Max of [10, 20, 30]:", findMax([10, 20, 30]));

function findMin(arr) {
    return Math.min(...arr);
}
console.log("MIN OF [10,20,30]",findMin([10, 20, 30]));

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("Is 'madam' a palindrome?", isPalindrome('madam'));


var str="madam";
console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));
