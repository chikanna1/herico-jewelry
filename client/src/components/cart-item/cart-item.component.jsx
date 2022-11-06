import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { productName, productImage1, productPrice, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={productImage1} alt={`${productName}`} />
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x {productPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
