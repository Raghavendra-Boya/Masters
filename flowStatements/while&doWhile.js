/*

while(condition){

}

//login validations
2. otp
3. games 
4. form validation



do-while:

*/

let correctPin = 1234;
let enteredPin = "";
let attempts = 0;


// while(enteredPin != correctPin){
//     enteredPin = parseInt(prompt("Enter your pin:"));
//     if(enteredPin != correctPin){
//         console.log("Incorrect Pin, try again");
//     }
//     else{
//         console.log("eneterd correct pin");
//     }
// }


// let i = 1;
// while(i<=5){
//     console.log(i);
  
// }

do{
    document.write("Welcom to X bank")
    enteredPin = parseInt(prompt("Enter your pin:"));
    attempts++;

}while(enteredPin != correctPin && attempts<3)

    if(enteredPin != correctPin){
         document.write("account locked, too many incorrect attempts")
    }
    else{
          document.write("pin accepted, welcome")
    }

    let count = 0;
    function increament(){
        count++;
        document.getElementById("count").innerText = `${count}`
        console.log("Hello");
    }

    function decreament(){
        count--;
        document.getElementById("count").innerText = `${count}`
    }