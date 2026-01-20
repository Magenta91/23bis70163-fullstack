import { useState } from 'react';
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from './context/AuthContext';
import store from './store/store';
import Login from './components/Login';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import './App.css';

// Main App Content (requires authentication)
function AppContent() {
  const { isLoggedIn, role } = useAuth();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  if (!isLoggedIn) {
    return <Login />;
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleCloseForm = () => {
    setEditingProduct(null);
    setShowProductForm(false);
  };

  return (
    <div className="app">
      <Header />
      
      <div className="main-content">
        <div className="content-wrapper">
          {/* Admin Only: Product Management Form */}
          {role === 'admin' && (
            <div className="admin-section">
              {!showProductForm ? (
                <button 
                  className="btn-add-product"
                  onClick={() => setShowProductForm(true)}
                >
                  ⭐ Add New Product
                </button>
              ) : (
                <ProductForm 
                  productToEdit={editingProduct}
                  onClose={handleCloseForm}
                />
              )}
            </div>
          )}

          {/* Product Catalog (All Users) */}
          <ProductList onEdit={handleEditProduct} />

          {/* Shopping Cart (All Users) */}
          <Cart />
        </div>
      </div>

      <footer className="app-footer">
        <p>State Management Demo: Context API (Auth) + Redux Toolkit (Products & Cart)</p>
      </footer>
    </div>
  );
}

// Root App Component with Providers
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Provider>
  );
}

export default App;
