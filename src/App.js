import { useEffect, useState } from "react";
import products from "./Products";
import Content from "./Content";
import Navbar from "./Navbar";

function App() {
  // Tax rate for calculating taxes on cart items
  const TaxRate = 8.25;

  // State to manage all cart-related data
  const [cartData, setCartData] = useState({
    productData: products,
    cartIsShowing: false,
    items: [],
    cartItems: 0,
    subtotal: 0,
    taxes: 0,
    total: 0,
  });

  // Toggles the visibility of the cart
  function displayCart() {
    setCartData((prevState) => {
      return {
        ...prevState,
        cartIsShowing: !prevState.cartIsShowing,
      };
    });
  }

  // Adds a product to the cart by its id
  function addItem(id) {
    // Find the product by id
    const product = cartData.productData.find((item) => item.id === id);
    setCartData((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, product], // Add product to items array
        cartItems: prevState.items.length + 1, // Update cart item count
      };
    });
  }
  // Recalculate subtotal, taxes, and total whenever cart items change
  useEffect(() => {
    // Calculate subtotal by summing up item prices
    const subTotal = cartData.items.reduce((acc, curr) => acc + curr.price, 0);
    // Calculate tax based on subtotal and tax rate
    const tax = parseFloat(((TaxRate / 100) * subTotal).toFixed(2));
    // Calculate total price
    const total = subTotal + tax;

    setCartData((prevState) => {
      return {
        ...prevState,
        subtotal: subTotal,
        taxes: tax,
        total: total,
      };
    });
  }, [cartData.items]);

  // Clears all items from the cart after user confirmation
  function clearCart() {
    // If cart is already empty, alert the user
    if (!cartData.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }
    // Ask for confirmation before clearing the cart
    const isCartCleared = window.confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );
    if (isCartCleared) {
      setCartData((prevState) => {
        return {
          ...prevState,
          items: [],
          cartItems: 0,
          subtotal: 0,
          taxes: 0,
          total: 0,
        };
      });
    }
  }
  // Render Navbar and Content components, passing necessary props
  return (
    <div>
      <Navbar showCart={displayCart} cartItems={cartData.cartItems} />
      <Content
        products={cartData.productData}
        showCart={cartData.cartIsShowing}
        addToCart={addItem}
        total={cartData.total}
        subtotal={cartData.subtotal}
        tax={cartData.taxes}
        cartItems={cartData.cartItems}
        items={cartData.items}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;
