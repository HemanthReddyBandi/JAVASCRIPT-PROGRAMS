const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return `Hello, ${this.firstName}!`;
    },
    isAdult(age) {
        return age >= 18;
    }
};

console.log(person.fullName());
console.log(person.greet());
console.log(person.isAdult(20));