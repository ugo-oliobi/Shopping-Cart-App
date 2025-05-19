import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStore } from "@fortawesome/free-solid-svg-icons";
//Navbar component displays the top navigation bar with store and cart icons
export default function Navbar(props) {
  return (
    <div className="nav-bar">
      {/* Store icon on the left */}
      <FontAwesomeIcon icon={faStore} className="store-icon" />
      {/* Title of the app */}
      <h2 className="nav-text">Shopping Cart</h2>
      {/* Cart icon and item count, clickable to show/hide cart */}
      <div className="cart" onClick={props.showCart}>
        {/* Show item count only if there is at least one item in the cart */}
        {props.cartItems >= 1 && (
          <div className="item-number-container">{props.cartItems}</div>
        )}
        {/* Cart icon */}
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      </div>
    </div>
  );
}
