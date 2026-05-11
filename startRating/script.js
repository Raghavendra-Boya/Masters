function rate(value){
    for(let i = 1; i<=5;i++){
        document.getElementById("s"+i).style.color = "gray"
    }
    for(let i = 1; i<=value;i++){
        document.getElementById("s"+i).style.color = "gold"
    }
    document.getElementById("result").innerText = value +"/5";
}