(function(){
    console.log('I am an anonymous function');

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    window.Person = Person; 
})();

var name1 = new Person("Raj", 25);
console.log(name1.name); 
console.log(name1.age);  
