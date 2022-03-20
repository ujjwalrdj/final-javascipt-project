var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

var leftDiv =  document.getElementById("left-column");
var cartCount = document.getElementById("cart-count")
var cartBtn = document.getElementById("cart-btn");
var checkoutItem = document.getElementById("checkout-item");

let count = 0;
//  <img id="productImg" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="">
leftDiv.innerHTML = ` <img id = "productImg" src = ${productData.photos[0]}   /> `

var rightDiv = document.getElementById("right-column")

rightDiv.innerHTML = `<div class="product-description">
<h1 id="name"> ${productData.name}   </h1>
<h4 id="brand">  ${productData.brand} </h4>
<h3>Price: Rs <span id="price"> ${productData.price} </span></h3>
<div class="description" >
  <h3>Description</h3>
  <p id = "description" >
      ${productData.description}

  </p>

</div>

<div class="product-preview" >
  <h3>Product Preview</h3>
  <div id = "preview-img" class="previewImg">
     

  </div>

</div>

</div>`



 
var photos = productData.photos

var previewDiv = document.getElementById("preview-img")

for( var i = 0 ; i < photos.length ; i++ ){
  if(i == 0){
  previewDiv.innerHTML += ` <img  id ="img${i}" onclick =  "smallImageClicked('img${i}')"   class = "active" src= ${photos[i]}  /> `
  }else{
  previewDiv.innerHTML += ` <img  id = "img${i}" onclick =  "smallImageClicked('img${i}')" src= ${photos[i]}  /> `
  }

}

var bigImage = document.getElementById("productImg")


var currentActiveId = "img0"


function smallImageClicked(imageId){
  var smallImage = document.getElementById(imageId)
  bigImage.src = smallImage.src
  var newActiveId = imageId
  smallImage.className = "active"
 var currentActiveElement =  document.getElementById(currentActiveId)
 currentActiveElement.className = ""
 currentActiveId = newActiveId
  // alert(" Id of small image clicked is  " + imageId )
}

cartBtn.addEventListener("click", event =>{
  const cl =  cartCount.classList;
  count++;
  cartCount.innerText = count;
  // cl.remove(c, cl.contains(c))
})



checkoutItem.addEventListener("click", function(){
  location.assign("http://127.0.0.1:5500/checkout1.html")
})

