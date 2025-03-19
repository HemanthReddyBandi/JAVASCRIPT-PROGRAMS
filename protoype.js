var emp=function(name,age){
    this.name=name;
    this.age=age;

}
emp.prototype.salary=20000;
var emp1=new emp("Raj",25);
var emp2=new emp("Ravi",24);
console.log(emp1.salary);
console.log(emp1.name);

