// npm install express
const express = require("express");
// npm install cors
const cors = require("cors");
const products = require("./products");
const cart = require("./cart");
const app = express();
const port = 3000;

// HTTP Methods/Verbs
// app.get() - get
// app.post() - add
// app.put() - update
// app.delete() - delete

// Status
// 200 - 299 - Success

// == Middleware ==
app.use(express.json());

// Cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Define a route
// .get(Route/URL, Callback(Route Handler))
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// Route Parameter
// parameter: placeholder
app.get("/api/products/:productId", (req, res) => {
  // req.params - return an object that contains the arguments for the router parameters.
  const productId = parseInt(req.params.productId);

  // .find(): return the first element that pass the test condition.
  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    res.status(200).json(product);
  } else {
    // Status 404: Not Found
    res.status(404).json({ message: "Product not found." });
  }
});

function generateUniqueId() {
  if (products.length === 0) {
    return 1;
  }

  const lastProductObject = products[products.length - 1];
  return lastProductObject.id + 1;
}

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    // 400: Bad request
    return res.status(400).json({ message: "Name and price are required." });
  }

  const newProduct = {
    id: generateUniqueId(),
    name,
    price,
  };

  products.push(newProduct);
  // 200: OK - Successful
  // 201: Succesfully created.
  res.status(201).json({
    message: "Product added to the product list.",
    product: newProduct,
  });
});

app.put("/api/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price is required." });
  }

  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    product.name = name;
    product.price = price;
    res.status(200).json({ message: "Product updated successfully!" });
  } else {
    res.status(404).json({ message: "Product not found!" });
  }
});

app.delete("/api/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(
    (productObject) => productObject.id === productId
  );

  if (productIndex !== -1) {
    // .splice(): add or delete element/s at a specified index
    // 1st argument: start
    // 2nd argument: delete count
    // 3rd argument: element/s you want to add
    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully!" });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

// Cart
app.post("/api/cart", (req, res) => {
  const productId = req.body.productId;

  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (!product) {
    res.status(404).json({ message: "Product not found." });
  }

  const existingCartItem = cart.find((item) => item.id === productId);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  res.status(201).json({
    message: "Product added to cart successfully!",
  });
});

app.get("/api/cart", (req, res) => {
  res.status(200).json({ cart });
});

app.delete("/api/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const index = cart.findIndex(
    (productObject) => productObject.id === productId
  );

  if (index !== -1) {
    cart.splice(index, 1);
    res.status(200).json({ message: "Product removed from cart." });
  } else {
    res.status(404).json({ message: "Product not found in cart." });
  }
});

// app.listen(): start the server on the specified port.
app.listen(port, () => {
  console.log("Server is listening to port:", port);
});
