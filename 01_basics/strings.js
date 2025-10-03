const name="Kashish"
const me="Deepak"

// console.log(`My name is ${me} and my lovely friend name is ${name}`);

const school=new String('jcs');

const score=400
// console.log(score);

const mymarks=new Number(200)
// console.log(mymarks);
// console.log(mymarks.toString().length);

// console.log(mymarks.toFixed(3));

const on=265.33
// console.log(on.toPrecision(2))

// const hund=10000000
// console.log(hund.toLocaleString('en-IN'));
console.log(Math)
console.log(Math.abs(-25));

console.log(Math.random());
//if i want a number between a certain range of numbers 

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);

// let mydate=new Date();

// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

let createdstring=new Date(2025, 11,17)
console.log(createdstring.toLocaleDateString())

let mytimestamp=Date.now()
console.log(mytimestamp)
//to seconds
console.log(Math.floor(mytimestamp/1000))
