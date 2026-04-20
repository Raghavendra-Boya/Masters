// document.write(`Step-1: add oil <br> Step-2: add spices <br> Step-3: add potato<br>Step-4: cook for 20 min `)
// document.write(`Step-1: add oil <br> Step-2: add spices <br> Step-3: add panneer<br>Step-4: cook for 20 min `)



function reciepe(ingredient,userName = "Dear"){

    document.write(`<h1>Hello ${userName}</h1><br> Step-1: add oil <br> Step-2: add spices <br> Step-3: add ${ingredient}<br>Step-4: cook for 20 min `)
}
reciepe("potato","A1")
reciepe("panneer")

let f1 = function(){
    document.write("AF")
}

f1()

function functuion1(callback){
console.log("maiin function");
callback()
}
functuion1(f2)

function f2(){
    console.log("call back function");
}

setTimeout(function(){
    console.log("Hello");
},2000)


