
let student = {
    name:"Raghava",
    age:25,
    loc: "bangalore"
}

console.log(student.loc);

let array = [1,2,3,4];
console.log(array[2]);
array[6]=5;
console.log(array);

student.name1 = "B";
console.log(student);

let arr1 = [1,2,[{a:1,b:2},{c:[10,20,30,{d:100,e:200}]},"Hello",{z:1000}],{x:500,y:400}]
console.log(arr1[2][1].c[3].e);

let arr = [
  {
    a:{
        b:{
            c:{
                d:[1,2,
                    {e:[3,4,{
                        f:[5,
                            {g:6}]}]}]}}}
},
  [7,8,{h:[9,{i:[10,{j:[11,{k:12}]}]}]}]
];

console.log(arr[0].a.b.c.d[2].e[2].f[1].g);


let students = [
  { name: "Ravi", age: 22, loc: "Hyderabad", course: "Java" },
  { name: "Anjali", age: 21, loc: "Bangalore", course: "JavaScript" },
  { name: "Kiran", age: 23, loc: "Chennai", course: "Python" },
  { name: "Sneha", age: 20, loc: "Mumbai", course: "Full Stack" },
  { name: "Arjun", age: 24, loc: "Pune", course: "Data Science" }
];
console.log("hello");
for(let i = 0;i<students.length;i++){
    console.log(students[i]);
    let element = document.getElementById("heading1").innerHTML +=`
    <div style="border: 2px solid green;"">
    <h3 style="color:red">userName: ${students[i].name}</h3>
    <h3 style="color:red">userName: ${students[i].age}</h3>
    <h3 style="color:red">userName: ${students[i].loc}</h3>
    <h3 style="color:red">userName: ${students[i].course}</h3>
    </div>
    
    `
}



console.log(element);

console.log("1"+"2");
console.log(1+2);