let savedtheme = localStorage.getItem("theme2")
console.log(savedtheme);

if(savedtheme == "dark"){
    document.getElementById("body").classList.remove("bg-white","text-black");
    document.getElementById("body").classList.add("bg-black","text-white");

}


function toggleTheme(){
    let body = document.getElementById("body");
    if(body.classList.contains("bg-white")){
        body.classList.remove("bg-white","text-black");
        body.classList.add("bg-black","text-white")

        localStorage.setItem("theme2","dark")
    }
    else{
         body.classList.remove("bg-black","text-white");
        body.classList.add("bg-white","text-black")

        localStorage.setItem("theme2","light")
    }


}

let count = 1;
function decreament(){
  if(count>1){
      count--;
    document.getElementById("qty").innerText = `Qty:${count}`
  }
  else{
    alert("min qty required")
  }
}
function increament(){
    count++;
    document.getElementById("qty").innerText = `Qty:${count}`
}