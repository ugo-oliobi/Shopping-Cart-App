import { useState } from "react";

// Card component displays individual product information and an "Add to cart" button on hover
export default function Card(props) {
  // State to control visibility of the "Add to cart" button
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div
      className="card"
      // Show button when mouse enters card
      onMouseEnter={() => {
        setShowBtn(true);
      }}
      // Hide button when mouse leaves card
      onMouseLeave={() => {
        setShowBtn(false);
      }}
    >
      {/* Product image */}
      <img className="dessert-image" src={props.image} alt={props.name} />
      {/* Product name */}
      <h2>{props.name}</h2>
      <div className="card-text">
        {/* Product price */}
        <p className="dessert-price">${props.price}</p>
        {/* Product category */}
        <p className="product-category">Category: {props.category}</p>
      </div>
      {/* Show "Add to cart" button only when hovered */}
      {showBtn && (
        <button
          id={props.identity} // Unique identifier for the product
          className="btn add-to-cart-btn"
          onClick={props.handleClick} // Handler to add product to cart
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
