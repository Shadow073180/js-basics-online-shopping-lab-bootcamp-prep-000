var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(101));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  
var newItem  = {itemName: itemName, itemPrice: getRandomInt(101) };
cart.push(newItem);
return ' has been added to you cart.';
}
function viewCart() {
for (let i = 0; i < cart.length; i++)


return 'In your cart, you have '
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}
function placeOrder(cardNumber) {
  // write your code here

}