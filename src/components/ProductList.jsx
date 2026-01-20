import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';
import { useAuth } from '../context/AuthContext';
import './ProductList.css';

const ProductList = ({ onEdit }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const { role } = useAuth();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(removeProduct(id));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Product Catalog</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-header">
              <h3>{product.name}</h3>
              <span className="product-price">${product.price}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <p className="product-stock">Stock: {product.stock} units</p>
            
            <div className="product-actions">
              <button 
                className="btn-add-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              
              {role === 'admin' && (
                <>
                  <button 
                    className="btn-edit"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
