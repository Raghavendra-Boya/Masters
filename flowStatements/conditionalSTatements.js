/*
What is flow:
Flow refers to the control flow of a program, which determines the order in which statements and instructions are executed. It is the sequence of steps that a program follows to achieve a specific outcome. Flow can be categorized into three main types: sequential flow, conditional flow, and loop flow.

1. conditional statements
2. loop statements
3. jump statements

1. conditional statements:
Conditional statements allow you to execute different blocks of code based on certain conditions. They enable you to make decisions in your program and control the flow of execution. The main types of conditional statements in JavaScript are:
- if statement: The if statement is used to execute a block of code if a specified condition is true. If the condition is false, the block of code is skipped.
- if...else statement: The if...else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.

1. if-else:
syntax:
if(condition){
    //code to be executed if condition is true
    }else{
    //code to be executed if condition is false
    }
    use case: 
    1. login status of user
    2. user creadentials
    3. age of a person
    4. product availability in stock
    5. discounts based on user type

    execution flow of if else:
    1. The condition is evaluated.
    2. If the condition is true, the code block inside the if statement is executed, and the code block inside the else statement is skipped.
    3. If the condition is false, the code block inside the else statement is executed, and the code block inside the if statement is skipped.
   
2. nested if-else:
syntax:
if(condition1){
    //code to be executed if condition1 is true
    }if(condition2){
    //code to be executed if condition2 is true
    }else{
    //code to be executed if condition2 is false
    }

use case:
1. grading system based on marks obtained by a student
2. categorizing products based on price range
3. determining the type of a triangle based on its sides
execution flow of nested if else:
1. The first condition (condition1) is evaluated.
2. If condition1 is true, the code block inside the first if statement is executed, and the rest of the conditions are skipped.
3. If condition1 is false, the second condition (condition2) is evaluated.
4. If condition2 is true, the code block inside the second if statement is executed, and the else block is skipped.
5. If condition2 is false, the code block inside the else statement is executed.

3. switch():
syntax:
switch(expression){

    case value1:
        //code to be executed if expression matches value1  
        break;
    case value2:
        //code to be executed if expression matches value2
        break;
    case value3:
        //code to be executed if expression matches value3
        break;
    default:
        //code to be executed if expression doesn't match any case
}
use case:
1. menu selection in a restaurant ordering system
2. handling different user roles in an application
3. determining the day of the week based on a number input

execution flow of switch case:
1. The expression is evaluated once.
2. The value of the expression is compared with the values of each case in the switch statement.
3. If a match is found, the corresponding code block is executed until a break statement is encountered, which exits the switch statement.
4. If no match is found, the code block inside the default case is executed (if it exists).
*/

console.log(document);

document.write("Helloooo")
let element = document.getElementById("vote");
// element.style.fontSize = "20px";
// element.style.color = "blue";


let age = prompt("Please enter your age:");
if (age >= 18) {
    element.style.color = "green";
    element.innerText = "You are eligible to vote.";
} else {
    element.style.color = "red";
    element.innerText = "You are not eligible to vote.";
}

function demo() {
    let result = document.getElementById("input").value;
    console.log(result);
}

let storedUserName = "admin";
let storedPassword = "admin123";
let loginResult = document.getElementById("loginResult");
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === storedUserName && password === storedPassword) {
        loginResult.style.color = "green";
        loginResult.innerText = "Login successful!";
    } else {
        loginResult.style.color = "red";
        loginResult.innerText = "Invalid username or password.";
    }
}

let username = "admin";
let password = "admin123";

// if(username=="admin" || username =="trainer" || username =="student")
// {
//     if(password=="admin123")
//     {
//         console.log("Login successful!");
//     }
//     else if(username =="trainer")
//     {
//         console.log("Welcome, trainer!");
//     }
//     else if(username =="student")
//     {
//         console.log("Welcome, student!");
//     }
//     else{
//         console.log("Invalid password.");
//     }

// }

if (username && password) {
    if (username === "admin" && password === "admin123") {
        console.log("Login successful!");
    } else if (username === "trainer" && password === "admin123") {
        console.log("Welcome, trainer!");
    } else if (username === "student" && password === "admin123") {
        console.log("Welcome, student!");
    } else {
        console.log("Invalid username or password.");
    }
}
else {
    console.log("Username and password cannot be empty.");
}

let day = 7;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
debugger


let role = "admin";
switch (role) {
         default:
        console.log("Invalid role");
    case "admin":
        console.log("Welcome, admin!");
        
   
        
    case "admin":
        console.log("Welcome, trainer!");
        
    case "student":
        console.log("Welcome, student!");


}