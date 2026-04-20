/*
WHat is loop:
A loop is used to reap a block of code multople times untill a condition is met.

1. for loop:---->

syntax:

for(intialization;comdition;step)
{

}


Loop through prices and display a table with Original Price and 10% Discounted Price.
let prices = [1000, 2000, 3000, 1500];


*/

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let months = ["Jan","Feb","Mar","Apr"]
console.log(months.length);

for(let i = 1;i<=31;i++){
    day.innerHTML += `<option>${i}</option>`
    let value  = i;
    console.log(value);
}

for(let i = 0;i<months.length;i++){
    month.innerHTML += `<option>${months[i]}</option>` 
}
for(let i = 1900;i<=2026;i++){
    year.innerHTML += `<option>${i}</option>`
}




let users = [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Rahul Sharma",
        location: "Bangalore",
        salary: 50000,
        role: "Frontend Developer"
    },
    {
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Priya Reddy",
        location: "Hyderabad",
        salary: 60000,
        role: "UI/UX Designer"
    },
    {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Arjun Kumar",
        location: "Chennai",
        salary: 55000,
        role: "Backend Developer"
    },
    {
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Sneha Patil",
        location: "Pune",
        salary: 48000,
        role: "QA Engineer"
    },
    {
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Vikram Singh",
        location: "Delhi",
        salary: 70000,
        role: "Full Stack Developer"
    },
    {
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Ananya Das",
        location: "Kolkata",
        salary: 52000,
        role: "Data Analyst"
    }
];

let container = document.getElementById("container");

for(let i =0;i<users.length;i++){
    container.innerHTML += `
    <div>
    <img src="${users[i].image}" alt="Iamge-${i+1}" style="border-radius:50%">
    <h3>${users[i].name}</h3>
    <p style= "color:${users[i].salary<=50000 ? 'red' :'green'}">${users[i].salary}</p>
    </div>
    `
}