var cars=new Map();
cars.set('Toyota', 'Japan');
cars.set('Ford', 'USA');
cars.set('BMW', 'Germany');
console.log(cars.size); 
console.log(cars.get('Toyota'));
console.log(cars.has('BMW'));
console.log(cars.delete('Ford'));
console.log(cars.size);

for (var key of cars.keys()){
    console.log(`key:${key}`);
}
for (var value of cars.values()){
    console.log(`value:${value}`);
}
 
for(var[key,value]of cars){
    console.log(`key:${key} value:${value}`);
}

cars.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

console.log(cars.clear());

cars.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});