const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);

fruits.push('Date');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

const index = fruits.indexOf('Banana');
console.log(index);

const filteredFruits = fruits.filter(fruit => fruit.startsWith('A'));
console.log(filteredFruits);

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);
