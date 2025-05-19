export default function CartProducts(props) {
  let product;
  // If there is more than one of this product, show the count and name
  if (props.totalCountPerProduct > 1) {
    product = (
      <div>
        {/* Show quantity and product name */}
        <p>
          {props.totalCountPerProduct}x {props.name}
        </p>
        {/* Show price */}
        <p>{props.price}</p>
      </div>
    );
  } else {
    // If only one, just show the name and price
    product = (
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    );
  }
  return (
    <div>
      {/* Render product info */}
      {product}
      {/* Divider line between products */}
      <hr />
    </div>
  );
}
