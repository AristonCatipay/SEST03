import React, { useState, useEffect } from "react";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  // useEffect(() => {}, []): sideeffect that will only run on mount.
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addNewProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: productName, price: productPrice }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts([...products, response.products]);
      setProductName("");
      setProductPrice(0);
    } catch (error) {
      setError(error.message);
      console.log("Error adding product:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <p>Welcome to the products page!</p>
      {products && (
        <ul>
          {products.map((productObject) => (
            <li key={productObject.id}>
              Name: {productObject.name} Price: {productObject.price}
            </li>
          ))}
        </ul>
      )}

      <h2>Add New Product</h2>
      <form action="">
        <div>
          <label htmlFor="product-name-id">Name:</label>
          <input
            type="text"
            id="product-name-id"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product-price-id">Price:</label>
          <input
            type="number"
            id="product-price-id"
            value={productPrice}
            onChange={(event) => setProductPrice(Number(event.target.value))}
          />
        </div>
        <button type="button" onClick={addNewProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
}
