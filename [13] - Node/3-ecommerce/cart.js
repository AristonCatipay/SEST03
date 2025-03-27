let cart = [];

function displayCart() {
  console.log("Cart:", cart);
}

function addToCart(productObject) {
  console.log(`${productObject.name} added to cart.`);
  cart.push(productObject);
}

function calculateTotal() {
  let total = 0;
  cart.forEach((productObject) => {
    total += productObject.price;
  });
  return total;
}

module.exports = {
  displayCart,
  addToCart,
  calculateTotal,
};
