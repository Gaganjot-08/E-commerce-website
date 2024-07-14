let shop = document.getElementById("shop");
let shop2 = document.getElementById("shop2");



let basket = JSON.parse(localStorage.getItem("data")) || [];


// hero section products
let generateShop = () => {
    return (shop.innerHTML = shopItemsData1.map((x) => {
        let {id, img, brand, name, price} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `<div class="pro">
            <img src="${img}" alt="">
            <div class="des">
                <span>${brand}</span>
                <h5>${name}</h5>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>${price}</h4>
            </div>
            <div class="buttons">
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            </div>
        </div>`
    }).join(""));
};
generateShop();


// new arrivals section
let generateShop2 =() => {
    return (shop2.innerHTML = shopItemsData2.map((x) => {
        let {id, img, brand, name, price} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `<div class="pro">
            <img src="${img}" alt="">
            <div class="des">
                <span>${brand}</span>
                <h5>${name}</h5>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>₹${price}</h4>
            </div>
            <div class="buttons">
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            </div>
        </div>`
    }).join(""));
}
generateShop2();

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
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
}
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById("cart-items");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
    // console.log(basket.map((x) => x.item).reduce((x,y) => x+y,0))
}
calculation();



