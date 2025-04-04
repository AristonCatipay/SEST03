import React, { useState, useEffect } from "react";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const addProduct = async () => {
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
      setProducts([...products, data.product]);
      setProductName("");
      setProductPrice(0);
    } catch (error) {
      setError(error.message);
      console.log("Error adding product:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = response.json();

      // .filter(): create a new array with elements that passed the test condition.
      const updatedProducts = products.filter(
        (productObject) => productObject.id !== productId
      );

      setProducts(updatedProducts);
      // console.log(data.message);
      console.log("Product deleted successfully!");
    } catch (error) {
      setError(error.message);
      console.log("Error deleting product:", error);
    }
  };

  const handleProductUpdate = async (productId) => {
    setSelectedProductId(productId);

    const productToUpdate = products.find(
      (productObject) => productObject.id === productId
    );

    setProductName(productToUpdate.name);
    setProductPrice(productToUpdate.price);
  };

  const updateProduct = async () => {
    if (!selectedProductId) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${selectedProductId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: productName,
            price: productPrice,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);

      const updatedProduct = data.product;
      const updatedProducts = products.map((productObject) => {
        if (productObject.id === selectedProductId) {
          return updatedProduct;
        } else {
          return productObject;
        }
      });

      setProducts(updatedProducts);
      setSelectedProductId(null);
      setProductName("");
      setProductPrice(0);
    } catch (error) {
      setError(error.message);
      console.log("Error updating prouduct:", error);
    }
  };

  const handleCancelUpdate = () => {
    setSelectedProductId(null);
    setProductName("");
    setProductPrice(0);
  };

  const addToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: productId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      setError(error.message);
      console.log("Error adding product to cart:", error);
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
              <button onClick={() => addToCart(productObject.id)}>
                Add to Cart
              </button>
              <button onClick={() => handleProductUpdate(productObject.id)}>
                Update
              </button>
              <button onClick={() => deleteProduct(productObject.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* condition ? true : false */}

      <h2>
        {selectedProductId ? "Update Product Details" : "Add New Product"}
      </h2>
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
        {/* condition ? true : false */}
        {selectedProductId ? (
          <>
            <button type="button" onClick={updateProduct}>
              Save Changes
            </button>
            <button type="reset" onClick={handleCancelUpdate}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={addProduct}>
            Add Product
          </button>
        )}
      </form>
    </div>
  );
}
