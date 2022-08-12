class car {
    constructor(carName,carNo){
        this.carName = carName;
        this.carNo = carNo;
    }
    getDetails(){
        return`car name is ${this.carName}and its number is ${this.carNo}`
    }
}
class force extends car{
    constroctor(carName,carNo,model,price){
       (carName,carNo); 
        this.model = model;
        this.price= price;
    }
    getFullDetails(){
        return`carname is ${this.carName} and its number is ${this.carNo} 
                     with model ${this.model} and price is ${this.price}`;

    }
}
const objforce = new force ('force',9223,'travellar',300000);
console.log(objforce.getFullDetails());