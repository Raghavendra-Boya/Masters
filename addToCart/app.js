let products = [
    {
        id: 1,
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 79999
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        price: 69999
    },
    {
        id: 3,
        name: "OnePlus 12",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        price: 59999
    },
    {
        id: 4,
        name: "Realme GT",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37",
        price: 29999
    }
];

let cart =[];

let cards = document.getElementById("cards");

for(let i =0; i<products.length;i++){
    cards.innerHTML += `
    <div class="bg-gray-500 p-5 rounded shadow">
        <img class="w-full h-80 rounded" src="${products[i].image}" alt="${products[i].name}">
        <h1>${products[i].name}</h1>
        <h2>${products[i].price}</h2>
        <button onclick="addToCart(${products[i].id})" class="bg-blue-500 text-white px-5 py-2 rounded mt-4 w-full">Add To Cart</button>
    </div>
    `   
}


function addToCart(id){
    console.log("Hello")
    let alreadyAdded = false;

    for(let i = 0; i<cart.length;i++){
        if(cart[i].id == id){
            alreadyAdded = true;
        }

       

        //  alert(`${products[i].name}  is added into the cart`)
    }

     if(alreadyAdded == true){
           alert("product already added")
           
        }
        else{
            for(let i = 0;i<products.length;i++){
                if(products[i].id==id){
                     cart.push(products[i])
                }
            }

             document.getElementById("count").innerText = cart.length;
        }
    
    
console.log(cart);

}

