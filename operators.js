let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

let x = 10;
x += 5;
console.log("x after += 5:", x);

console.log("Equal:", a == b);
console.log("Not Equal:", a != b);
console.log("Strict Equal:", a === b);// no type cpnversioinn
console.log("Greater Than:", a > b);

console.log("AND:", a > 5 && b < 10);
console.log("OR:", a > 15 || b < 10);
console.log("NOT:", !(a > 15));

console.log("Bitwise AND:", a & b);
console.log("Bitwise OR:", a | b);

let result = a > b ? "a is greater" : "b is greater";
console.log(result);

console.log("Type of a:", typeof a);
