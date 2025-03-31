const express = require("express");
const products = require("./products");
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
  res.status(201).json({ message: "Product added to the product list." });
});

// app.listen(): start the server on the specified port.
app.listen(port, () => {
  console.log("Server is listening to port:", port);
});
