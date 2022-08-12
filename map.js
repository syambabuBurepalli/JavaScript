const num = [1,2,3,4,5];
//map() function using arrow function
num.map((element)=>console.log(element));

const names = ["chitti","chintu","syam"];

names.map((element)=>console.log(element));

// filter using arrow function

const arr = [3,5,7,9];
let filter = arr.filter((element)=>element<7);
console.log(filter);