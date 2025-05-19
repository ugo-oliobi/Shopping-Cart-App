import Card from "./Card";
import Cart from "./Cart";

// Content component displays all product cards and the cart (if visible)
export default function Content(props) {
  // Map each product to a Card component, passing product details and handler as props
  const cards = props.products.map((card) => (
    <Card
      name={card.name}
      image={card.image}
      price={card.price}
      category={card.category}
      identity={card.id}
      key={card.id}
      handleClick={() => props.addToCart(card.id)} // Handler for adding to cart
    />
  ));
  return (
    <div className="card-container">
      {/* Render all product cards */}
      {cards}
      {/* Conditionally render the Cart component if showCart is true */}
      {props.showCart && (
        <Cart
          total={props.total}
          subtotal={props.subtotal}
          tax={props.tax}
          cartItems={props.cartItems}
          items={props.items}
          clearCart={props.clearCart}
        />
      )}
    </div>
  );
}
