import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../store/productsSlice';
import './ProductForm.css';

const ProductForm = ({ productToEdit, onClose }) => {
  const getInitialFormData = () => {
    if (productToEdit) {
      return {
        name: productToEdit.name,
        price: productToEdit.price,
        description: productToEdit.description,
        stock: productToEdit.stock,
      };
    }
    return {
      name: '',
      price: '',
      description: '',
      stock: '',
    };
  };

  const [formData, setFormData] = useState(getInitialFormData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    if (productToEdit) {
      dispatch(updateProduct({ ...productData, id: productToEdit.id }));
    } else {
      dispatch(addProduct(productData));
    }

    setFormData({ name: '', price: '', description: '', stock: '' });
    if (onClose) onClose();
  };

  return (
    <div className="product-form-container">
      <div className="product-form-card">
        <h3>{productToEdit ? 'Edit Product' : 'Add New Product'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="0"
              min="0"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {productToEdit ? 'Update Product' : 'Add Product'}
            </button>
            {productToEdit && (
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
