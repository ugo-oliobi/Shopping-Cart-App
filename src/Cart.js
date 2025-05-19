import CartProducts from "./CartProducts";

export default function Cart(props) {
  // Object to store the count of each product in the cart
  const totalCountPerProduct = {};
  props.items.forEach((dessert) => {
    totalCountPerProduct[dessert.id] =
      (totalCountPerProduct[dessert.id] || 0) + 1;
  });

  // Create a unique list of products in the cart using their id
  const cartProduct = Array.from(
    new Map(props.items.map((product) => [product.id, product])).values()
  );

  // Map each unique product to a CartProducts component, passing count and details as props
  const display = cartProduct.map((product) => (
    <CartProducts
      name={product.name}
      price={product.price}
      totalCountPerProduct={totalCountPerProduct[product.id]}
    />
  ));

  return (
    <div id="cart-container">
      {/* Button to clear all items from the cart */}
      <button onClick={props.clearCart} className="btn" id="clear-cart-btn">
        Clear Cart
      </button>
      {/* Display the list of products in the cart */}
      <div id="products-container">{display}</div>
      {/* Show total number of items */}
      <p>
        Total number of items: <span id="total-items">{props.cartItems}</span>
      </p>
      {/* Show subtotal */}
      <p>
        Subtotal: <span id="subtotal">${props.subtotal.toFixed(2)}</span>
      </p>
      {/* Show taxes */}
      <p>
        Taxes: <span id="taxes">${props.tax.toFixed(2)}</span>
      </p>
      {/* Show total price */}

      <p>
        Total: <span id="total">${props.total.toFixed(2)}</span>
      </p>
    </div>
  );
}
