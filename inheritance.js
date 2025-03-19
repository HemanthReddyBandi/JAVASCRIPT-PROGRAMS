class parent{
    get(){
        console.log("Parent class");
    }
}
class child extends parent{
    getchild(){
        console.log("Child class");
    }
}
var obj=new child();
obj.get();
obj.getchild();