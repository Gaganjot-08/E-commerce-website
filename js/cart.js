let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
    let cartIcon = document.getElementById("cart-items");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
    // console.log(basket.map((x) => x.item).reduce((x,y) => x+y,0))
}
calculation();



let generateCartItems = () => {
    if (basket.length !== 0){
        return shoppingCart.innerHTML = basket.map((x) => {
            let{id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `
            <div class="cart-item">
                <img src="${search.img}" width="200" alt"" />
                <div class="details">
                    <div class="title">${search.name}</div>
                    <div class="cart-item-price">₹${search.price}</div>
                    <div class="buttons">
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    </div>
                    <div class="total-quantity">Total: ${item * search.price}</div>
                    <i onclick="removeItem(${id})" class="fas fa-trash"></i>
                </div>
            </div>`;
        }).join("");
    }
    if (basket.length === 0){
        shoppingCart.innerHTML = ``;
        label.innerHTML =  `
        <h2>Cart is Empty</h2>
        <a href="index.html>
        <button class="HomeBtn">Back to Home</button>
        </a>`
    }
};
generateCartItems();



let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else {
        search.item += 1;
    }
    // console.log(basket);
    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket =basket.filter((x) => x.item !== 0);
    generateCartItems();
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
}
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}
let removeItem = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
    // let search = basket.find((x) => x.id === selectedItem.id);
    // if(search === undefined) return;
    // else {
    basket = basket.filter((x) => x.id !== selectedItem.id);
    //     }
    generateCartItems();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
    calculation(); 
}
let totalAmount = () => {
    if (basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce ((x,y) => x+y,0);
        // console.log(amount);
        label.innerHTML= `
        <h2>Total Bill: ₹${amount}</h2>
        <a href="checkout.html"><button class="checkout">Checkout</button></a>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>`
    }
    else return;
}
totalAmount();
let clearCart =() => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
    calculation();
}
