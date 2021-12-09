let message = "Hello!"
let messageCopy = message;

// console.log(messageCopy)

let a = {}
let b = a ; // copy of a
// console.log(a === b , a == b)


//Cloning and merging objects

let user = {
    name: "John",
    age: 30
};
let clone = {}

//let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key]
}

// console.log(clone)

//Object.assign()

const target = { a:1, b:2, c:6 } // only change when the value are less than other property
const source = { a:2, b:4, c:5 }

const returnedTarget = Object.assign(target, source)

// console.log(target)
// console.log(returnedTarget)

let user3 = {
    name: "John",
    age: 30
};
let permission3 = {
    canView: true
}
let permission4 = {
    canEdit: true
}

Object.assign(user3, permission3, permission4)

// console.log(user3)

let user4 ={
    name: "Jony",
    age: 60
}

let clone1 = Object.assign({}, user4)
// console.log(clone1)


//nested cloning
let newUser = {
    name: "John",
    size: {
        height: 180,
        width: 80
    }
}
// let clone2  = Object.assign({}, newUser)
// console.log(newUser.size === clone2.size)
let clone2 = newUser;
newUser.size.width++;
// console.log(clone2.size.width)


//Interlinked objects --> Hard to understand
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    
    return{
        father: man,
        mother:woman
    }
}

let family = marry({name: "John"}, {name: "Anna"})

// console.log(family)

// Method in shorthand

// user = {
//     sayHi: function (){
//         console.log('Hello')
//     }
// }
// --------------------------or-------------------------
user = {
    sayHi(){
        console.log('Hello')
    }
}





