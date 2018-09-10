var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
var obj = {itemName: item, itemPrice: price}
  cart.push(obj)

  return cart
}

function viewCart() {
  const length = cart.length

  if (length === 0) {
    return ("Your shopping cart is empty.")
  }
 else if (length === 1){
 cart.forEach(item, price){
   return 'In your cart, you have '+ item + ' at '+ price +'.'
 }}

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
  
