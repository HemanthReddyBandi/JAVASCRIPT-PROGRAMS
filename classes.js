class hemu{
    constructor(age ){
        this.age=age;
    }
    gethemuinfo(){
        return { age: this.age };
    }
    education=[];
    setEducationInfo(...edu){        //... to accept multiple arguments
        this.education.push(edu);
    }
    getEducationInfo(){
        return this.education;
    }
}
module.exports = hemu;