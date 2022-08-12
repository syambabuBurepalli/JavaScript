//class
class sample{
    constructor(a,b){
        this.x = a;
        this.y = b;
    }
    add(){
        return(this.x+this.y);
    }
}
const obj1 = new sample(4,5);
console.log(obj1.add());



//class example 2
class sample1{
    constructor (c,d){
        this.s = c;
        this.t = d;
    }
    add(){
        return(this.s*this.t); 
    }
}
const obj2 = new sample1(4,5);
console.log(obj2.add());


