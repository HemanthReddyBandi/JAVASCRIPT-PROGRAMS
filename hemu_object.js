const value=require('./classes.js');
var obj=new value(20);
console.log(obj.gethemuinfo());
obj.setEducationInfo('SSC','DIPLOMA','B.Tech');
console.log(obj.getEducationInfo());