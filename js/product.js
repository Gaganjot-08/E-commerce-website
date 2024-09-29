const mainImg = document.getElementById("mainimg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}


// let prodetails = document.getElementById("prodetails");
// let generateProduct = () => {
//     return (prodetails.innerHTML = shopItemsData4.map((x)=>{
//         let {id, img, brand, name, price} = x;
//         return `
//         <div class="single-pro-image">
//             <img src="../img/products/f1.jpg" width="100%" id="mainimg">
//             <div class="small-img-group">
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f1.jpg" width="100%" alt=""></div>
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f2.jpg" width="100%" alt=""></div>
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f3.jpg" width="100%" alt=""></div>
//             </div>
//         </div>
//         <div class="single-pro-details">
//             <h6>t-shirt</h6>
//             <h4>Car T-Shirt</h4>
//             <h2>700</h2>
//             <select name="" id="">
//                 <option value="">Select Size</option>
//                 <option value="">XXL</option>
//                 <option value="">XL</option>
//                 <option value="">Large</option>
//                 <option value="">Small</option>
//                 <option value="">Very Small</option>
//             </select>
//             <input type="number" value="1" />
//             <button class="normal">Add to Cart</button>
//             <h4>Product Details</h4>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore delectus, fugit nobis temporibus animi facilis adipisci doloremque ullam suscipit.</span>
//         </div>
//     `}))
// };

// generateProduct();
















// // code for save 
// {/* <div class="single-pro-image">
//             <img src="../img/products/f1.jpg" width="100%" id="mainimg">
//             <div class="small-img-group">
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f1.jpg" width="100%" alt=""></div>
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f2.jpg" width="100%" alt=""></div>
//                 <div class="small-img-col"><img class="small-img" src="../img/products/f3.jpg" width="100%" alt=""></div>
//             </div>
//         </div>
//         <div class="single-pro-details">
//             <h6>t-shirt</h6>
//             <h4>Car T-Shirt</h4>
//             <h2>700</h2>
//             <select name="" id="">
//                 <option value="">Select Size</option>
//                 <option value="">XXL</option>
//                 <option value="">XL</option>
//                 <option value="">Large</option>
//                 <option value="">Small</option>
//                 <option value="">Very Small</option>
//             </select>
//             <input type="number" value="1" />
//             <button class="normal">Add to Cart</button>
//             <h4>Product Details</h4>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore delectus, fugit nobis temporibus animi facilis adipisci doloremque ullam suscipit.</span>
//         </div> */}