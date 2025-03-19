class bikes{
    constructor(brand){
        this.brand=brand;
    }
    getbikeinfo(){
        return {brand  : this.brand};
    }
    model=[];
    setbikemodel(...model){
        this.model.push(model);
    }
    getbikemodel(){
        return {model :this.model};
    }
}
var obj=new bikes('Royal Enfield');
console.log(obj.getbikeinfo());
obj.setbikemodel('GT650','Classic','Himalayan');
console.log(obj.getbikemodel());