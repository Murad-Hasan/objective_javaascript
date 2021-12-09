// const user1 = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
//   sayHi() {
//     console.log(`Hi. I'm ${this.name}`);
//   },
//   // [Symbol.toStringTag]: 'User',
// };
//
// console.log(user.sayHi());
// console.log(user.isAdmin);

// const multiple ={
//   "likes birds": true,
// }
// let key = "likes birds";
// // console.log(multiple[key]);
//
//
// const makeUser = (name,age) =>
// {
//   return {
//     name,
//     age
//   };
// };

// let user = makeUser('John', 30);
// // console.log(user.name);
//
// let user2 = {}
// // console.log(user2.noSuchProperty === undefined) //true means "no such property"
//
// let user3 = {
//   name: 'John',
//   age: 30,
//   color: 'red',
// }

// console.log("name" in user3)


// let user4 = {
//   name: 'John',
//   age: 30,
//   color: 'red',
//   isAdmin: true
// }

// for (let key in user){
//   console.log(key) // get all properties
//   console.log(user[key]) // get all values
//   console.log(key + ":" + user[key])
// }
//
// let codes = {
//   '49': 'Germany',
//   '41': 'Switzerland',
//   '44': 'Great Britain',
//   '1': 'USA',
//   '7': 'Russia',
//   '20': 'Egypt'
// };
//
// for (let code in codes){
//   // console.log(code + ":" + codes[code])
// }

// let schedule = {
//   '8:30': 'get up',
//   '10:00': 'eat',
//   '11:00': 'work',
//   '13:00': 'gym',
//   '15:00': 'sleep',
//   '16:00': 'repeat'
// };

// console.log(schedule["8:30"]);


// function isEmpty(obj){
//   for (let key in obj){
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(schedule));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum) // 390

let doubleNumber = {
    numberOne: 40,
    numberTwo: 50,
    numberThree: 60,
    title: "Double Number"
}

multiplyNumeric(doubleNumber)

function multiplyNumeric(doubleNumber){
  for (let key in doubleNumber){
    if (typeof doubleNumber[key] === 'number'){
        doubleNumber[key] *= 2;
    }
  }
}
for (let key in doubleNumber){
  console.log(doubleNumber[key])
}

