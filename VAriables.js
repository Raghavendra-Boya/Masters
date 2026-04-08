/*
WHat ios Variable:
Variable is a container for storing data values. In JavaScript, you can declare a variable using the var, let, or const keywords. Each variable has a name and can hold a value of any data type, such as numbers, strings, objects, etc.

Syntax:
var variableName = value;

types:
1. var: The var keyword is used to declare a variable that can be re-assigned and has function scope. It is the oldest way to declare variables in JavaScript.
2. let: The let keyword is used to declare a variable that can be re-assigned and has block scope. It was introduced in ES6 (ECMAScript 2015) and is the recommended way to declare variables in modern JavaScript.
3. const: The const keyword is used to declare a variable that cannot be re-assigned and has block scope. It is also introduced in ES6 and is used for variables that should not change after they are assigned a value.

var:
1. functional/global Scope
2. var can be re-declared and re-assigned
3. var variables are hoisted to the top of their scope and initialized with undefined

let:
1. block scope
2. let can be re-assigned but cannot be re-declared in the same scope
3. let variables are hoisted to the top of their scope but are not initialized

const:
1. block scope
2. const cannot be re-assigned and cannot be re-declared in the same scope
3. const variables are hoisted to the top of their scope but are not initialized
*/

// var c;//declaration
// c = 20;//initialization




// var a = 10;//declaration and initialization
// var a = 50;//re-declaration
// a=100;//re-assignment
// console.log(a);//100

// {
//     console.log(a);//100
// }

// function test(){
//     var b = 30;
//     var a =200;
//     console.log(b);
//     console.log(a);//200
// }
// test();
// test();
// test();
// console.log(a);//100


// console.log(b);




// var d;//undefined
// var h;//undefined

// var d = 40;

// {
//     var e;//undefined
//     var e = 50;
//     console.log(d);
// }
// console.log(e);//50
// function test1(){
//     var f;//undefined
//     var f = 60;
//     console.log(f);//60
// }
// test1();
// if(true){
//     var g;//undefined
//     var g = 70;
//     console.log(g);//70
// }
// console.log(g);//70
// var h = 80;


// let i = 90;//declaration and initialization
// console.log(i);

// {
//     console.log(i);
//     let j = 100;
//     console.log(j);
// }
// console.log(j);//ReferenceError: j is not defined

// let k = 110;//declaration and initialization
// console.log(k);
// {
//     let k = 120;
//     console.log(k);//120
// }



// console.log(z);
// let z = 130;

let z;
console.log(z);
// let z = 130;



// var z;//undefined
// console.log(z);//undefined
// var z = 130;
// console.log(z);//130

const x=100;
console.log(x);
