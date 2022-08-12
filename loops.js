//loops can execute a block of code a number of times

// programme to display text 5 times
const n =5;
for(let i = 1; i<=n; i++){        //looping from i = 1 to 5 if i=0 the text will  disply in 6 times
    console.log('my name is syam')
}
// by using arrey
const car = ["bmw","maruthi","tata","ford"];
for(let i = 1; i<=car.length; i++){
    console.log(car);
}
// disply numbers from 1 to 10
const n1 = 10;
for(i = 1; i<=n1; i++){
    console.log(i);
}
// sum of n natural numbers
let sum = 0;
const n2 = 100;
for(let i = 1; i<=n2; i++){
    sum += i;
}
console.log('sum:',sum);
// program to display the sum of natural numbers
let sum1 = 0;
const n3 = 10

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i >= n3; i--) {
    sum1 += i;  // sum = sum + i
}

console.log('sum1:', sum1);