//cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

//Open/close cart
cartIcon.onclick = ()=> {
  cart.classList.add("active")
};

closeCart.onclick = ()=> {
  cart.classList.remove("active")
};

//Cart working JS
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready();
}

//Making function
function ready() {
  //remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove")
  console.log(removeCartButtons)
  for(var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //Quantity change
  var quantityInputs = document.getElementsByClassName("cart-quantity")
  for(var i = 0; i < quantityInputs.length; i++){ 
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }
  // Add to Cart
  var addCart = document.getElementsByClassName("add-cart")
  for(var i = 0; i < addCart.length; i++){
    var button = addCart[i]
    button.addEventListener("click", addCartClicked);
  }
  //Buy Button Work
  document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

//Buy Button
function buyButtonClicked(){
  alert("Your order has been placed")
  var cartContent = document.getElementsByClassName("cart-content")[0]
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal()
}

//Remove items from cart
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updateTotal();
}

//Quantity Changed
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updateTotal();
}

//Add to cart
function addCartClicked(event){
  var button = event.target
  var shopProduct = button.parentElement
  var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
  var price = shopProduct.getElementsByClassName("price")[0].innerText;
  var sku = shopProduct.getElementsByClassName("sku")[0].innerText;
  var productImg = shopProduct.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, sku, productImg);
}

function addProductToCart(title, price, sku, productImg) {
  var cartItems = document.getElementsByClassName("cart-content")[0];

  // Crie um novo item de carrinho
  var cartBox = document.createElement('div');
  cartBox.classList.add('cart-box');
  
  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <div class="cart-sku">SKU: ${sku}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <!--Remove Cart-->
    <i class='bx bx-trash cart-remove'></i>
  `;
  
  cartBox.innerHTML = cartBoxContent;
  
  // Adicione o novo item ao carrinho
  cartItems.appendChild(cartBox);
  
  // Adicione eventos de remoção e alteração de quantidade para o novo item
  cartBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
  cartBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
  
  updateTotal(); // Atualize o total após adicionar um produto ao carrinho
}
  
//Update Total
function updateTotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for(var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""))
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }  

  // Se o preço contém centavos, arredonde para duas casas decimais
  total = Math.round(total * 100) / 100

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

