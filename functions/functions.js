

function getTotal(price){
    let totalPrice =  price + (price*0.18);
    return totalPrice;
}


function calculate(){
    let price = Number(document.getElementById("price").value);
    let total = getTotal(price);
    document.getElementById("result").innerText = `Total:  ${total}`
    console.log(total);
}


function getGrade(studentMarks){
    if(studentMarks>=90) return "A";
    else if(studentMarks>=70) return "B";
    else return "C";
}

function checkGrade(){
    let marks = Number(document.getElementById("marks").value);
    let grade = getGrade(marks);
    document.getElementById("studentResult").innerText = `Grade: ${grade}`;
}


//self invoking function(IIFE)
//function that runs immediatly after declarion
/*
(function(){})();



*/

(function(){
    console.log("Wlcome User")
})();


// function theme(){
//     document.getElementById("body").style.backgroundColor = "white";
//     console.log("Hello")
// }

(function(){
 document.getElementById("body").style.backgroundColor = "white";
})();