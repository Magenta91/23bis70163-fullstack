import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity >= 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🎁 Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🎁 Shopping Cart</h2>
        <button className="btn-clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.productId} className="cart-item">
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            
            <div className="cart-item-controls">
              <div className="quantity-control">
                <label>Qty:</label>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                />
              </div>
              
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <button 
                className="btn-remove"
                onClick={() => handleRemove(item.productId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-amount">${total.toFixed(2)}</span>
        </div>
        <button className="btn-checkout">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
