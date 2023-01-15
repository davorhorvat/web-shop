var allTotal = 0;

// adding products
function addToCart(element) {
  var mainEl = element.closest(".single-item");
  var price = mainEl.querySelector(".price").innerText;
  var name = mainEl.querySelector("h3").innerText;
  var quantity = mainEl.querySelector("input").value;
  var cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {

    price = price.substring(1);
    price = parseInt(price);
    var total = price * parseInt(quantity);

    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
                                    <h5 name="articleName">${name}</h5>
                                    <h6 name="articleQuantity">€${price} x ${quantity} = €<span>${total}</span></h6>
                                    <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>`;

    document.querySelector(".total").innerHTML = `<div class="total-price">
                                                      <h4 name="totalPrice">Total price: €${allTotal}</h4><br>
                                                      <button class="open-button" onclick="openForm()">Order</button>
                                                      </div>`;

    element.innerText = "Added";
    element.setAttribute("disabled", "true");
  } else {
    alert("Please, choose quantity!");
  }
}

// removing products 
function removeFromCart(element) {
  var mainEl = element.closest(".cart-single-item");
  var price = mainEl.querySelector("h6 span").innerText;
  var name = mainEl.querySelector("h5").innerText;
  var products = document.querySelectorAll(".single-item");

  price = parseInt(price);

  allTotal -= price;

  document.querySelector(".total").innerHTML = `<div class="total-price">
                                                    <h4 name"totalPrice">Total price: €${allTotal}</h4><br>
                                                    <button class="open-button" onclick="openForm()">Order</button>
                                                  </div>`;

  mainEl.remove();

  products.forEach(function(items) {
    var itemName = items.querySelector(".si-content h3").innerText;

    if (itemName === name) {
      items.querySelector(".actions input").value = 0;
      items.querySelector(".actions button").removeAttribute("disabled");
      items.querySelector(".actions button").innerText = "Add";
    }
  });
}

function openForm() {
  document.getElementById("myOrder").style.display = "block";
}

function closeForm() {
  document.getElementById("myOrder").style.display = "none";
}

function sendOrder() {
  alert("Your Order is confirmed.");
}


