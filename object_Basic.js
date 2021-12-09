//new profile object
// let profile = {
//     name: "MURAD HASAN",
//     age: 20,
// }
// console.log(profile.name);

// const person = new Object();
// person.name = "Murad";
// person.age = 20;
// person.color = "blue";
//
// console.log(person)


// const person = {} ;
// person.name = "Murad";
// person.age = 20;
// person.color = "blue";
//
// console.log(person.age);

const person = {
    name: "Murad",
    age:  null,
    color: "blue",
    address: {
        city: "",
        country: "",
    }
}
//
// const x = person
// x.age = 30;
// x.address.city = "Dhaka";
// x.address.country = "Bangladesh";

// console.log(person.age)
//
// console.log(x)

//accessing javascript properties
const Person1 = {
    name: "mahmud",
    age: 22,
    color: "blue",
    address: {
        city: "Rangpur",
        country: "BD",
    }
}
// console.log(Person1.name);
// console.log(Person1["name"]);
// x= "name";
// console.log(Person1[x])


//javascript for in loop
let text;
for (let x in Person1) {
    text = `${x} : ${Person1[x]}`;
    console.log(text);
}