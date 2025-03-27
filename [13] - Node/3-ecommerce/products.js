const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 500,
  },
  {
    id: 3,
    name: "Headphone",
    price: 100,
  },
];

function displayProducts() {
  console.log("Products:", products);
}

function getProduct(productId) {
  // find(): return the first element that pass the test condition.
  return products.find((productObject) => productId === productObject.id);
}

module.exports = {
  displayProducts,
  getProduct,
};
