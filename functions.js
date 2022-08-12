function add (a,b){
    return a*b;
}
const result = add(45,56);
console.log(result);

// using arrow function

const s = (a,b)=>{
    return a+b;
}
console.log(s(45,45));

// or

const x = (a,b)=>add(a,b);
console.log(x(35,67));
// functions
const z = (a,b)=>add(a,b);
console.log(z(56,55));
//function exmple by division
function s1(a,b){
    return a/b;
}
const result1 = s1(100,25);
console.log(s1(100,25));
//by using arrow function