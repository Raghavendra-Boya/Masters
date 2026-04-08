

/*
WHat is Operator:
Operators are special symbols or keywords in JavaScript that perform specific operations on one or more operands (values or variables) and return a result. They are used to manipulate data, perform calculations, and make decisions in your code. JavaScript has a wide range of operators that can be categorized into several types:

why do we need operators:
1. To perform calculations: Operators allow you to perform mathematical operations such as addition, subtraction, multiplication, and division on numbers.
2. To compare values: Comparison operators enable you to compare two values and return a boolean result (true or false) based on the comparison.
3. To assign values: Assignment operators allow you to assign values to variables and perform operations while assigning.
4. To combine values: Logical operators enable you to combine multiple boolean expressions and return a boolean result based on the combination.
5. To manipulate strings: String operators allow you to concatenate (combine) strings and perform other string-related operations.

types of operators:
1. Arithmetic Operators: These operators are used to perform mathematical operations on numbers. Examples include + (addition), - (subtraction), * (multiplication), / (division), % (modulus), and ** (exponentiation).
Example:+, -, *, /, %, **

2. Assignment Operators: These operators are used to assign values to variables. Examples include = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment), and %= (modulus assignment).
Example: =, +=, -=, *=, /=, %=
*/
let addition = 5 + 3;
let division = 10 / 2;

let modulus = 10 % 2;

let a= 10;
a = a+5;
a +=5;


let c = 100;
c= c+50;

console.log(c);//150
c /= 4;
console.log(c);//37.5
c %= 7;
console.log(c);//2.5

//3. Comparison Operators: These operators are used to compare two values and return a boolean result. Examples include == (equal to), === (strict equal to), != (not equal to), !== (strict not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).
//Exam[ples: ==, ===, !=, !==, >, <, >=, <=

//== (equal to) operator compares the values of two operands for equality, performing type coercion if necessary. It returns true if the values are equal, and false otherwise.
//=== (strict equal to) operator compares both the values and the types of two operands for equality. It returns true if both the values and types are equal, and false otherwise.
//!= (not equal to) operator compares the values of two operands for inequality, performing type coercion if necessary. It returns true if the values are not equal, and false otherwise.
//!== (strict not equal to) operator compares both the values and the types of two operands for inequality. It returns true if either the values or the types are not equal, and false otherwise.


let x= 10;//number
let y = "10";//string
console.log(x == y); // true (type coercion)
console.log(x === y); // false (strict comparison)
console.log(x !== y); // false (type coercion)(10 !== "10" is false because they are considered equal after type coercion)


//4. Logical Operators: These operators are used to combine multiple boolean expressions and return a boolean result based on the combination. Examples include && (logical AND), || (logical OR), and ! (logical NOT).
//&& (logical AND) operator returns true if both operands are true, and false otherwise.
//|| (logical OR) operator returns true if at least one of the operands is true, and false if both operands are false.
//! (logical NOT) operator returns true if the operand is false, and false if the operand is true.

console.log(10>5 && 30<=12);
console.log(10>5 && 10<5);
console.log(10>5 || 20<30);
console.log(!(10>5));
console.log(!(10>5 && 30<=30));

console.log(true && false || true && !false);

//5. Ternary Operator: This operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is: condition ? expressionIfTrue : expressionIfFalse.
//syntax:
// condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let canVote = age > 17 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

let a1 = 20;
let b1 = 5;
let result = a1>b1 ? a1<15 ? "Between 5-15" : "Greater than 15" : "Less than or equal to 5";
console.log(result);

//unary operator: These operators operate on a single operand. Examples include + (unary plus), - (unary minus), ++ (increment), -- (decrement), and typeof (type of).
//+ (unary plus) operator attempts to convert the operand to a number and returns the numeric value. If the operand cannot be converted to a number, it returns NaN.
//- (unary minus) operator attempts to convert the operand to a number and returns the negation of the numeric value. If the operand cannot be converted to a number, it returns NaN.
//++ (increment) operator increases the value of the operand by 1. It can be used in both prefix and postfix forms.
//prefix form (++x) increments the value before it is used in an expression, while postfix form (x++) increments the value after it is used in an expression.
//-- (decrement) operator decreases the value of the operand by 1. It can also be used in both prefix and postfix forms.
//prefix form (--x) decrements the value before it is used in an expression, while postfix form (x--) decrements the value after it is used in an expression.
//typeof operator returns a string indicating the type of the operand.


console.log(typeof +"5");
console.log(typeof -"5");
console.log(+true);
console.log(3+ +"5");


a1++;
console.log(++a1);//20---21---22
console.log(a1);//22
console.log(a1++);
console.log(++a1);

a1 =24;

console.log(--a1);//23
console.log(a1);//23
console.log(a1--);//23---22
console.log(--a1);//21

//Type COnversions:
//1. implicit Type Conversion (Type Coercion): JavaScript automatically converts values from one type to another when performing operations that involve different types. For example, when you use the + operator with a number and a string, JavaScript converts the number to a string and concatenates them.
//2. explicit Type Conversion: You can manually convert values from one type to another using built-in functions or methods. For example, you can use the Number() function to convert a string to a number, or the String() function to convert a number to a string.
//Number(), String(), Boolean() are some of the built-in functions for explicit type conversion.
console.log(5 + "10"); // "510" (number 5 is converted to string "5" and concatenated with "10")
console.log("5"-"3"); // 2 (string "5" is converted to number 5, and string "3" is converted to number 3, then subtracted)

// let product1 = Number(prompt("Enter the price of the product1:"));
// console.log(productPrice);
// console.log(typeof productPrice);
// let product2 = Number(prompt("Enter the price of the product2:"));
// let totalCost = product1 + product2;
// console.log("Total cost: " + totalCost);

console.log(Boolean(undefined)); // false

console.log(typeof "Hello"-2); // "undefined"

console.log(NaN == 7);