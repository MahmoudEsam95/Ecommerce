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






//////////////////////////////discount code


function applyDiscount() {
  var showItem = JSON.parse(localStorage.getItem("cart"));

  let DISCOUNTCODES = ["000", "111", "222"];
  let discount = document.getElementById("discount-code-input");
  let totalPriceDiv = document.getElementById("total_price");
  let total = 0;
  for (let item of showItem) total += item.price * item.count;

  console.log(discount.value);
  let result = DISCOUNTCODES.filter(
    (code) => code.toLowerCase() == discount.value.toLowerCase()
  );

  console.log(result);
  if (result.length > 0) {
    let totalDiscount = total * 0.01;
    total = total - totalDiscount;
    console.log(total);
    totalPriceDiv.innerText = `${total} M$`;
  } else alert("wrong code");
}
