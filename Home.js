const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
const searchForm = document.querySelector(".search-bar");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchForm.querySelector("input").value;
  alert(`You searched for: ${searchTerm}`);
  // Add code here to perform the search
});

let list = [
  {
    ID: 1,
    name: "home",
    url: "https://media.istockphoto.com/id/165432736/photo/a-victorian-style-home-with-wrap-around-porch.jpg?s=612x612&w=0&k=20&c=6rkflAsChucFZL7e-wiG2UVy8IoHOD7P6x5g8ELoD20=",
    price: 2.0,
    count: 1,
    category: "old",
    html: "http://127.0.0.1:5501/productPage.html",
  },
  {
    ID: 2,
    name: "house",
    url: "https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/0a25a230-6368-4551-bb12-a52dcf6bf9cb/what-to-know-before-buying-an-old-house-header.webp",
    price: 3.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 3,
    name: "castle",
    url: "https://housekaboodle.com/wp-content/uploads/Queen-Anne-House-2480-Sheridan-Rd-Highland-Park-IL-Featured-Image.png",
    price: 4.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 4,
    name: "villa",
    url: "https://photos.zillowstatic.com/fp/1780620c961df964d1044c517c0cb6e7-cc_ft_1152.webp",
    price: 5.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 5,
    name: "villa",
    url: "https://i.cbc.ca/1.6065797.1623722037!/fileImage/httpImage/j-n-thompson-house-at-1875-richter-street-kelowna.jpg",
    price: 6.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 6,
    name: "home",
    url: "https://www.fredmiranda.com/forum/ufiles/32/2111732.jpg",
    price: 7.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 7,
    name: "house",
    url: "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/44207/44207-b580.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 8,
    name: "house",
    url: "https://hommes.studio/wp-content/uploads/2022/01/teletubby-style-modern-house-hidden-in-the-landscape-1.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 9,
    name: "villa",
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e9cad297446817.5ec540ae38f1f.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 10,
    name: "castle",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErHxl6b1krwmk5m3-tM9Z7sO56y6I7e57ng&usqp=CAU",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 11,
    name: "home",
    url: "https://i.pinimg.com/550x/cb/93/3d/cb933dd7f8679db0b8a64bcc387b9b49.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 12,
    name: "villa",
    url: "https://www.gannett-cdn.com/presto/2021/03/02/PNDN/f54f2159-946d-4592-9d83-c174ec40199c-GSH_Modern_Arch_0307.jpg?width=660&height=400&fit=crop&format=pjpg&auto=webp",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 13,
    name: "castle",
    url: "https://www.albayan.ae/polopoly_fs/1.306714.1476144956!/image/image.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 14,
    name: "house",
    url: "https://www.almrsal.com/wp-content/uploads/2014/08/10-Most-Beautiful-Palaces-in-the-World.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 15,
    name: "home",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/WLM14ES_-_08082013_123255_ASTORGA_0141_-_.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 16,
    name: "villa",
    url: "https://www.fundacionaquae.org/wp-content/uploads/2014/07/alhambra.jpeg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 17,
    name: "castle",
    url: "https://images.akhbarelyom.com/images/images/large/20220324231002734.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 18,
    name: "castle",
    url: "https://www.gheir.com/big/travel1-27-4-2014.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 19,
    name: "home",
    url: "https://elbashayer-com.b-cdn.net/elbashayer/uploads/2021/02/elbashayer-2021-02-24_333074.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 20,
    name: "house",
    url: "https://decorab.com/wp-content/uploads/2021/10/%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D9%81%D9%84%D9%84-6.jpg",
    price: 7.0,
    count: 1,
    category: "new",
    html: "#",
  },
  {
    ID: 21,
    name: "home",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mentmore_Towers_from_angle.jpg/350px-Mentmore_Towers_from_angle.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 22,
    name: "castle",
    url: "https://pic.i7lm.com/wp-content/uploads/2020/01/11-23-780x405.jpg",
    price: 7.0,
    count: 1,
    category: "palace",
    html: "#",
  },
  {
    ID: 23,
    name: "villa",
    url: "https://d2yrzan8q3e3gn.cloudfront.net/blog/wp-content/uploads/2020/03/Home-Insurance-For-Older-Houses-min-scaled.jpeg",
    price: 7.0,
    count: 1,
    category: "old",
    html: "#",
  },
  {
    ID: 24,
    name: "house",
    url: "https://i.insider.com/5ec7d9814dca684799354fc9?width=1136&format=jpeg",
    price: 7.0,
    count: 1,
    category: "old",
    html: "#",
  },
];

var selectedCategory = "all";
let image = document.getElementById("build");

function displayProducts() {
  let loc = localStorage.setItem("item", JSON.stringify(list));
  let stored = JSON.parse(localStorage.getItem("item"));
  let data = "";
  for (let i = 0; i < stored.length; i++) {
    let item = stored[i];
    if (item.category == selectedCategory || selectedCategory == "all") {
      data += `
  <div class="card m-1" style="width: 18rem;">
      <img src="${item.url}"alt="pic" height="200px">
      <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text cart-price">${item.price}M$</p>
          <button class="btn btn-outline-primary" onclick="add(${i})" >Buy</button>
          <a href='${item.html}' class="btn btn-outline-dark">Show</a>
          <i class="fa-solid fa-heart btn btn-outline-danger" onclick="addWish(${i})"" style="float: right; font-size: 1.8rem; cursor: pointer;"></i>
      </div>
  </div>
  `;
    }
  }
  image.innerHTML = data;
}
displayProducts();

function add(index) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    cart = [];
  }
  let isNew = true;
  var newItem = list[index];
  cart.forEach((cartItem) => {
    if (cartItem.ID == newItem.ID) {
      cartItem.count++;
      isNew = false;
    }
  });
  if (isNew) {
    cart.push(newItem);
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}

updateCart();
// updateCart item
function updateCart() {
  var showItem = JSON.parse(localStorage.getItem("cart"));
  if (showItem == null) {
    showItem = [];
  }
  console.log(showItem);
  let sideBarItems = document.getElementById("cart_content");
  let tPrice = document.getElementById("total_price");
  let valueCount = document.getElementById("cart_price");
  let totalPrice = 0.0;
  let details = "";
  let price = "";
  for (var i = 0; i < showItem.length; i++) {
    details += `
  <div class="cart-box">
        <img src="${showItem[i].url}"alt="pic" class="cart-image">
        <div class="details-box">
          <div class="cart-product-title">${showItem[i].name}</div>
          <div class="cart-price" id='cart_price'>${
            showItem[i].price * showItem[i].count
          }M$</div>
          
        </div>
        <i class="fa-solid fa-trash cart-remove" onclick='removeItem(${i})'></i>
  </div>`;
    totalPrice += showItem[i].price * showItem[i].count;
    price = `
  <div class="total-title">Total</div>
  <div class="total-price" >${totalPrice}M$</div>`;
  }
  sideBarItems.innerHTML = details;
  tPrice.innerHTML = price;
}

function removeLocalStorage() {
  localStorage.removeItem("cart");
  updateCart();
}

function removeItem(item) {
  let removedItem = JSON.parse(localStorage.getItem("cart"));
  removedItem.splice(item, 1);
  localStorage.setItem("cart", JSON.stringify(removedItem));
  updateCart();
}

// wish list
function addWish(index) {
  var wish = JSON.parse(localStorage.getItem("wish"));
  if (wish == null) {
    wish = [];
  }

  var newItem = list[index];
  wish.push(newItem);
  // wish.forEach(wishItem => {
  //   if (wishItem.ID == newItem.ID){
  //     wishItem.count++ ;
  //     isNew = false;
  //   }
  // });
  // if (isNew){
  //   wish.push(newItem);
  // }
  localStorage.setItem("wish", JSON.stringify(wish));

  updateWish();
}

updateWish();

function updateWish() {
  var showItem = JSON.parse(localStorage.getItem("wish"));
  if (showItem == null) {
    showItem = [];
  }
  console.log(showItem);
  let sideBarItems = document.getElementById("wish_content");
  // let tPrice = document.getElementById('total_price');
  // let valueCount = document.getElementById('cart_price')
  // let totalPrice = 0.0;
  let details = "";
  let price = "";
  for (var i = 0; i < showItem.length; i++) {
    details += `
  <div class="cart-box">
        <img src="${showItem[i].url}"alt="pic" class="cart-image">
        <div class="details-box">
          <div class="cart-product-title">${showItem[i].name}</div>
          <div class="cart-price" id='cart_price'>${showItem[i].price}M$</div>
          
        </div>
        <i class="fa-solid fa-trash cart-remove" onclick='removeItemFromWish(${i})'></i>
  </div>`;
    //   totalPrice += showItem[i].price * showItem[i].count;
    //   price = `
    // <div class="total-title">Total</div>
    // <div class="total-price" >${totalPrice}M$</div>`
  }
  sideBarItems.innerHTML = details;
  // tPrice.innerHTML = price;
}

function removeWishList() {
  localStorage.removeItem("wish");
  updateWish();
}

function removeItemFromWish(item) {
  let removedItem = JSON.parse(localStorage.getItem("wish"));
  removedItem.splice(item, 1);
  localStorage.setItem("wish", JSON.stringify(removedItem));
  updateWish();
}

// Category

function changeCategory(select) {
  selectedCategory = select.options[select.selectedIndex].value;
  console.log(selectedCategory);
  displayProducts();
}

// search by name
function search() {
  let seachItem = document.getElementById("txt_search");
  item = "";
  for (let i = 0; i < list.length; i++) {
    if (
      list[i].name == seachItem.value ||
      list[i].name.includes(seachItem.value)
    ) {
      item += `
  <div class="card m-1" style="width: 18rem;">
      <img src="${list[i].url}"alt="pic" height="200px">
      <div class="card-body">
          <h5 class="card-title">${list[i].name}</h5>
          <p class="card-text cart-price">${list[i].price}M$</p>
          <button class="btn" onclick="add(${i})" >Buy</button>
      </div>
  </div>`;
    }
  }
  image.innerHTML = item;
}

// function oldHouses() {
//   //debugger;
//   console.log('hello');
//   let image1 = document.getElementsByClassName('old-build');
//   let stored1 = JSON.parse(localStorage.getItem("item"));
//   let data1 = '';
//   for (let i = 0; i < stored1.length; i++) {
//     data1 += `
//   <div class="card m-1" style="width: 18rem;">
//       <img src="${stored1[i].url}"alt="pic" height="200px">
//       <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text cart-price">${stored1[i].price}M$</p>
//           <button class="btn" onclick="add(${i})" >Buy</button>
//       </div>
//   </div>
//   `
//     console.log(stored1);
//   }

//   image1.innerHTML = data1;
//   console.log(data1);
// }

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// OPen cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

let wishIcon = document.querySelector("#wish-icon");
let wish = document.querySelector(".wish");
let closeWish = document.querySelector("#close-wish");

// OPen cart
wishIcon.onclick = () => {
  wish.classList.add("active");
};

// Close cart
closeWish.onclick = () => {
  wish.classList.remove("active");
};

// add product

let nameRealEstate = document.getElementById("name");
let priceRealEstate = document.getElementById("price");
let pictureRealEstate = document.getElementById("picture");
let categoryRealEstate = document.getElementById("categories");

function addRealEstate() {
  let id = 25;
  list.push({
    ID: id++,
    name: nameRealEstate.value,
    url: pictureRealEstate.value,
    count: 1,
    price: priceRealEstate.value,
    category: categoryRealEstate.value,
  });
  localStorage.setItem("item", JSON.stringify(list));

  displayProducts();
}

// Pop-up form
let form = document.querySelector(".form-wrapper");
function ShowForm() {
  form.classList.add("active");
}

function cancel() {
  form.classList.remove("active");
}

// if (document.readyState == "loading"){
//   document.addEventListener("DOMContentLoaded", ready);
// }else {
//   ready();
// }

// function ready(){
//   // Remove Items From Cart
//   var removeCartButtons = document.getElementsByClassName('cart-remove');
//   console.log(removeCartButtons);
//   for (var i=0 ; i< removeCartButtons.length; i++){
//     var button = removeCartButtons[i];
//     button.addEventListener('click', removeCartItem)

//   }

//   //Quantity changes
//   var quantityInputs = document.getElementsByClassName("cart-quantity");
//   for (var i=0 ; i< quantityInputs.length; i++){
//     var input = quantityInputs[i];
//     input.addEventListener("change", quantityChanges)
//   }
// }

// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }

// function quantityChanges(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0){
//     input.value = 1;
//   }
//   updatetotal();
// }

// // Udate total
// function updatetotal(){
//   var cartContent = document.getElementsByClassName('cart-content')[0];
//   var cartBoxes = cartContent.getElementsByClassName("card-box");
//   var total =0;
//   for (var i=0; i< cartBoxes.length; i++){
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[i];
//     var price = parseFloat(priceElement.innerText.replace("$", ""));
//     var quantity = quantityElement.value;
//     total = total + (price * quantity);

//     // document.getElementsByClassName('total-price')[0].innerText = '$' +total;
//   }
// }
