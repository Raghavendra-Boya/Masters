/*
WHat is Dat type:
data types defines that what kind of data or value a variable can hold. In JavaScript, there are several built-in data types that can be categorized into two main groups: primitive data types and non-primitive (or reference) data types.

1. primitive data types:
- number: represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
     Real time usecases:
        1. Age of a person
        2. Price of a product
        3. temperature in a city
- string: represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: 'Hello', "World", `JavaScript`
        Real time usecases:
        1. Name of a person
        2. Address of a place
        3. Email of a user
- boolean: represents a logical value that can be either true or false. Example: true, false
        Real time usecases:
        1. Is a user logged in?
        2. Is a product in stock?
        3. Is a form valid?
- null: represents the intentional absence of any object value. It is a primitive value that indicates that a variable has no value. Example: null
        Real time usecases:
        1. A variable that is not yet assigned a value
        2. A variable that is explicitly set to have no value
        3. Database fields that are empty or not applicable
- undefined: represents a variable that has been declared but has not been assigned a value. Example: undefined
        Real time usecases:
        1. A variable that is declared but not initialized
        2. A function that does not return a value
        3. An object property that does not exist



        2. non-primitive (or reference) data types:
        we can  able to store multiple values in a single variable using non-primitive data types. These data types include:

- object: represents a collection of key-value pairs. It can hold various types of data, including other objects, arrays, and functions. Example: { name: 'John', age: 30 }
        Real time usecases:
        1. Storing user information in a web application
        2. Representing a product in an e-commerce website
        3. Managing configuration settings in a software application
        Syntax:
        let ObjectName = {
        key1: value1,
        key2: value2,
        ...
        };

- array: represents an ordered list of values. It can hold multiple values of any data type, including other arrays and objects. Example: [1, 2, 3, 'Hello', { name: 'Alice' }]
        Real time usecases:
        1. Storing a list of items in a shopping cart
        2. Managing a collection of user comments on a blog post
        3. Keeping track of a series of events in a timeline
        Syntax:
        let arrayName = [value1, value2, value3, ...];
        we are going to access values of array using index number and index number start with 0.

*/

let number = 43;
console.log(typeof number);

let name = "John";
console.log(typeof name);

let isMale = true;
console.log(typeof isMale);

let emptyValue = null;
console.log(typeof emptyValue);//Note: typeof null returns "object" due to a historical bug in JavaScript, but it is still considered a primitive data type.

let student = {
    name: "Alice",
    age: 20,
    isEnrolled: true,
    courses: ["Math", "Science", "History"]
}

console.log(typeof student);
console.log(student.age);

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);

let mixedArray = [1, "Hello", true, { name: "Bob" }, [1, 2, 3,{name:"Alice",age:25,isStudent:true,courses:["Math","Science","History"]}]];
console.log(mixedArray[3].name); 
console.log(mixedArray[4][1]);
console.log(mixedArray.length);
console.log(mixedArray[4][3].courses[1]);

function test(){
    console.log("This is a function");
}
console.log(typeof test);