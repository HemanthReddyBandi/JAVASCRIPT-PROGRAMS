
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.firstName); 
console.log(person["lastName"]); 

console.log(person.address.city); 


console.log(person.fullName());

person.phoneNumber = "123-456-7890";
console.log(person.phoneNumber);


person.age = 31;
console.log(person.age); 

delete person.isEmployed;
console.log(person.isEmployed); 