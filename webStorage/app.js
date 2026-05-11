/**
 *
 * 

WHat is Web Storege:
is udsed to store data inside the browser



Ex:
1. save login information
2. save cart item
3. darkk/light mode
4. form data


why:
1. small amout of data
2. slower
3. complex of code

1. local storage:

2. session storage


setItem(key,value)----store the data in webstorage
getItem(key)---get data from WS
removeItem(key)----remove the specific data WS

clear()----remove all data
key(index)----get key name by index




 */

localStorage.setItem("institute","AIT")


localStorage.setItem("institute","AIT-1")
document.write(localStorage.getItem("institute"))
localStorage.setItem("ID",100)

let gettedID =localStorage.getItem("ID");
document.write(typeof JSON.parse(gettedID))

let fruits = ["Apple","banan","mango"]//"["Apple","banan","mango"]"
localStorage.setItem("Froots",JSON.stringify(fruits))
let array = localStorage.getItem("Froots")
console.log(JSON.parse(array));

let student = {name:'Ravi',age:34};

localStorage.setItem("studentData",JSON.stringify(student))
console.log(JSON.parse(localStorage.getItem("studentData")));

localStorage.removeItem("studentData");
 
// localStorage.clear();
console.log(localStorage.length);


sessionStorage.setItem("ID-1",1000)




