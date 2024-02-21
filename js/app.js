// // console.log(message)
// // var message = "hello";
// // var message = "World";
// // console.log(message);

// // console.log(message);

// // console.log(mes1)
// // let mes1 = "Hello let";
// // mes1 = "Hello let 2";
// // console.log(mes1)

// // console.log(mes2)
// // const mes2 = "Hey World!";
// // mes2= "Hello";
// // console.log(mes2)

// // hoisting

//                     // var    let    const
// // reassignment       yes      yes    no
// // redeclare            yes   no     no
// // scope           functional block  block



// // function abc (){
// //     let firstname = "john";
// // }
// // console.log(firstname)


// // const istrue = true;

// // if(istrue){
// //     const lastName = "Cena";
// // }
// // console.log(lastName)

// // let,const - block(if-else,function,{})
// //var - functional scope

// // string
// const greet = "Hello";
// console.log(typeof greet)

// const num = 12;
// console.log(typeof num)

// const isTrue = true;
// console.log(isTrue);

// // undefined

// // null

// // object

// const obj = {}

// console.log(typeof obj)

// // function in js

// //1) regular function

// // function add(num1=0,num2=0){

// //     return num1 + num2;
// // }
// // console.log(add(4,8))

// // Arrow function
// const add = (num1=0,num2=0) => num1 + num2;
    
// console.log(add(4,8))

// // console.log(mulitply(23,90))
    
// // anonymous functions
// const fn = function(n1,n2){
//     return n1 / n2;
// }
// console.log(fn(200,43))

//(IIFE) Immediatly invoked fucntion expression

// (() => {
//     console.log("IIFE")
// })()

// 

// 3 fizz
// 5 buzz
// 15 fizzbuzz

// if(null){
//     console.log("TRUE")
// }else if(2 == 2){
//     console.log("FALSE")
// }else{

// }

// const role = "admin";

// switch (role) {
//     case "admin":
//         // return admion auth logic
//     case "user":
//         // user logic
//         break;
//     default:
//         // return "Not authenticated!"
// }

// Falsy - 0 , "" , null , undefined, NAN
// 


// loops
// for(let i = 1; i < 50; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzBuzz")
//     }else if(i % 5 === 0){
//         console.log("buzz")
//     }else if(i % 3 === 0 ){
//         console.log("fizz")
//     }else{
//         console.log(i)
//     }
// }

// let x = 1;
// while (x <= 10) {
//     console.log(x)
//     x++;
// }


/* 
    hoisting
    data types in js
    var let const
    function type 
        - regular function
        - arrow function
        - anonymous function
        - IIFE
    conditionals - if else
    loops
    array
    string
    obj
*/ 

// Array
// const arr1 = [12,45,89,67,90,234];

// for (let i = 0; i < arr1.length; i++ ){
//     console.log(arr1[i])
// }

const arr = [];

console.log(arr);
arr.push(1)
arr.push(4)
arr.push(7)
console.log(arr);
arr.pop()
console.log(arr)

arr.unshift(2);
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.reverse())

// const a = arr.every((a) => a = 4);
// console.log(a)

console.log()
// const arr1 = new Array(10);
// typeof arr - object
    // check for array 
    // Array.isArray(arr)
// const arr1 = new Array(10);

const str = "Hello world";

console.log(str.length);
console.log(str[str.length - 1])

// console.log(str.split(""))


// palindrome rotator


function checkPalindrome(word){
//     // str -> arry char
//     const wordArray = word.split("")
//     console.log(wordArray)
//     // arr -> reverse
//     const revereArray = wordArray.reverse();
//     console.log(revereArray)
//     // convert to string
//     const revStr = revereArray.join("");
//     console.log(revStr);
//     // compare - original - reverse
//   return word === revStr

// return word.split("").reverse().join("") === word
    
}

console.log(checkPalindrome("rotator"))

const str1 = "apple";
console.log(str1.charAt(4))

// objects
const obj = {
    name: "Jack",
    run : function() {
        return "Running..."
    }
}

// access
// dot notation
console.log(obj.name)

// bracket
console.log(obj["name"])

// update or add

obj.city = "pune";
obj.city = "mumbai";

console.log(obj)

// rest operator
// spread operator
// destructuring
// map 
// set

const fruits = ["apple","banana", "orange"];

const moreFruits = ["Pineapple"];

const merge = [...fruits, ...moreFruits]

console.log(merge)

function abc(a,b,...item){
    console.log(a)
    console.log(item)
}

console.log(abc(1,2,3,4))



const student = {
    name: "Jack",
    section: "A",
    address: "LA"
}

console.log(student["name"])
console.log(student["section"])
console.log(student["address"])

// destructuring objects
const {address,name} = student;
console.log(address)
console.log(name)


const numbers = [1,32,56,123,658];

const [a,b,...rest] = numbers;
console.log(a)
console.log(b)
console.log(rest)

// access
const heading = document.getElementById("heading");




// style using js
heading.innerText = "Hello HTML"
heading.style.background ="red"

// create element
const h3 = document.createElement("h3")
console.log(h3)

// events

const heading2 = document.querySelector(".heading2");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    heading2.innerHTML = `
    <h1>New Text</h1>
    <p>Lorem ipsum dolor</p>
    `
    
    heading2.style.background = "blue"
})










