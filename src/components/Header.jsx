import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { userName, role, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>� ShopHub</h1>
        </div>
        
        <div className="header-right">
          <div className="cart-badge">
            <span className="cart-icon">🎁</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </div>
          
          <div className="user-info">
            <span className="user-name">✨ {userName}</span>
            <span className={`user-role role-${role}`}>{role}</span>
          </div>
          
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
