/*
let date = new Date();

getDate()----->returns day of month
getDay()----->retuns the day od the week



Math()
math().PI():
*/

// let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// date.setDate(15)
// date.setFullYear(1900)
// date.setMonth(11)
// console.log(date); 

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// setInterval(function(){
//     let time = new Date();
// document.getElementById("time").innerText = time.toLocaleTimeString();

// },2000)


// console.log(Math);
// console.log(Math.round(10.5));//nearesr integer
// console.log(Math.floor(10.99));
// console.log(Math.ceil(10.01));
// console.log(Math.trunc(10.5));
// console.log(Math.round((Math.random())*10000));


// let n = 4;
// let num = n;

// for(let i = 1; i<=n;i++){
//     let row = "";
//     for(let j = 1; j<=i;j++){
//         row += num + " "// 
           
//     }
// num--
     

//     console.log(row);
// }


// row = 
//     4
//   3 3
//  2 2 2 
//1 1 1 1
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let endDate = new Date();
endDate.setDate(endDate.getDate()+3);
// console.log(endDate);

function updateCountdown(){
    let now = new Date().getTime();
    // console.log(now);
    let distance = endDate.getTime() - now;
    // console.log(distance);


// if(distance<0){
// clearInterval(time);
//  document.getElementById("countdown").innerText = "Offer Expired";
//  return;
// }

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    // console.log(hours);
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("countdown").innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    console.log(hours);
    // console.log(days);
}

let time = setInterval(updateCountdown,1000)
updateCountdown()