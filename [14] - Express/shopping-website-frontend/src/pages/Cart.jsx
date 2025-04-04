import React, { useState, useEffect } from "react";

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cart");

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCart(data);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/cart/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);
      const updatedCart = cart.filter(
        (productObject) => productObject.id !== productId
      );
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
      console.log("Error removing product from cart:", error);
    } finally {
      setLoading(false);
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
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((productObject) => (
              <li key={productObject.id}>
                Name: {productObject.name} Quantity: {productObject.quantity}
                <button onClick={() => removeFromCart(productObject.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Your cart is currently empty.</p>
        </>
      )}
    </div>
  );
}
