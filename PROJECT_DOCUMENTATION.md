# E-Commerce State Management Demo

A comprehensive React application demonstrating state management using **Context API** and **Redux Toolkit** for authentication and product management.

## 🎯 Project Overview

This application showcases a complete state management solution combining:
- **Context API** for authentication state (user, roles, tokens)
- **Redux Toolkit** for product catalog and shopping cart management
- **Role-based access control** (Admin vs User)

## 🚀 Features

### Authentication (Context API)
- ✅ Login system with username and role selection
- ✅ Authentication state management (isLoggedIn, userName, role, token)
- ✅ Mock token generation
- ✅ Logout functionality
- ✅ Protected routes

### Product Management (Redux Toolkit)
- ✅ View product catalog
- ✅ Add new products (Admin only)
- ✅ Update existing products (Admin only)
- ✅ Delete products (Admin only)
- ✅ Product details (name, price, description, stock)

### Shopping Cart (Redux Toolkit)
- ✅ Add products to cart
- ✅ Update item quantities
- ✅ Remove items from cart
- ✅ Clear entire cart
- ✅ Real-time cart total calculation
- ✅ Cart item counter in header

### Role-Based Features
**Admin Role:**
- Full product management (Add, Edit, Delete)
- View and purchase products
- Cart management

**User Role:**
- View products only
- Add products to cart
- Cart management

## 📁 Project Structure

```
counter-spa/
├── src/
│   ├── components/
│   │   ├── Cart.jsx              # Shopping cart component
│   │   ├── Cart.css
│   │   ├── Header.jsx            # App header with user info
│   │   ├── Header.css
│   │   ├── Login.jsx             # Login form
│   │   ├── Login.css
│   │   ├── ProductForm.jsx       # Add/Edit product form
│   │   ├── ProductForm.css
│   │   ├── ProductList.jsx       # Product catalog display
│   │   └── ProductList.css
│   ├── context/
│   │   └── AuthContext.jsx       # Context API for authentication
│   ├── store/
│   │   ├── cartSlice.js          # Redux slice for cart
│   │   ├── productsSlice.js      # Redux slice for products
│   │   └── store.js              # Redux store configuration
│   ├── App.jsx                   # Main app component
│   ├── App.css
│   ├── main.jsx                  # App entry point
│   └── index.css
└── package.json
```

## 🛠️ Technology Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Redux Toolkit** - State management for products and cart
- **React-Redux** - React bindings for Redux
- **Context API** - Authentication state management

## 📋 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

## 🎮 How to Use

### 1. Login
- Enter any username
- Select role: **Admin** or **User**
- Click "Login"

### 2. As Admin
- Click "➕ Add New Product" to create products
- Edit products using the "Edit" button on product cards
- Delete products using the "Delete" button
- Add products to cart

### 3. As User
- View product catalog
- Add products to cart
- Manage cart items

### 4. Shopping Cart
- Adjust quantities directly in cart
- Remove individual items
- Clear entire cart
- View real-time total

## 🔑 Key Concepts Demonstrated

### Context API Implementation
```jsx
// AuthContext provides:
- isLoggedIn: boolean
- userName: string
- role: 'admin' | 'user'
- token: string
- login(username, role): function
- logout(): function
```

### Redux Toolkit Slices

**Products Slice:**
```javascript
Actions:
- addProduct(product)
- updateProduct(product)
- removeProduct(productId)
```

**Cart Slice:**
```javascript
Actions:
- addToCart(product)
- removeFromCart(productId)
- updateQuantity(productId, quantity)
- clearCart()
```

## 🎨 Features Highlights

1. **Responsive Design** - Works on desktop and mobile devices
2. **Real-time Updates** - All state changes reflect immediately
3. **Clean UI** - Modern gradient design with smooth transitions
4. **User Feedback** - Confirmation dialogs for destructive actions
5. **Type-safe State** - Structured Redux state with immutable updates

## 📝 State Management Architecture

```
┌─────────────────────────────────────────┐
│           Application Root              │
│  (Redux Provider + Auth Provider)       │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼──────────┐   ┌────▼──────────┐
│ Context API  │   │ Redux Toolkit │
│  (Auth)      │   │ (Products +   │
│              │   │  Cart)        │
│ • User Info  │   │ • Catalog     │
│ • Role       │   │ • Cart Items  │
│ • Token      │   │ • Totals      │
└──────────────┘   └───────────────┘
```

## 🔒 Authentication Flow

1. User enters credentials → `login()` called
2. AuthContext updates state
3. Token generated (mock)
4. App re-renders with authenticated view
5. Role-based features enabled/disabled

## 🛒 Cart Flow

1. User clicks "Add to Cart" → `addToCart()` dispatched
2. Redux updates cart state
3. Header badge updates with item count
4. Cart component shows updated items
5. Total recalculated automatically

## 🎯 Learning Objectives Met

✅ **a.** Created AuthContext with isLoggedIn, userName, and login/logout functions  
✅ **b.** Implemented Redux productsSlice with add, update, remove actions  
✅ **c.** Built integrated app combining Context API (auth) and Redux (products + cart)  
✅ **d.** Implemented role-based access control (admin vs user)

## 📚 Additional Resources

- [React Context API](https://react.dev/reference/react/createContext)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)

## 🐛 Troubleshooting

**Issue: App not loading**
- Ensure all dependencies are installed: `npm install`
- Check if port 5173 is available

**Issue: State not updating**
- Verify Redux DevTools if installed
- Check browser console for errors

## 📄 License

MIT License - Feel free to use this for learning purposes!

---

Built with ❤️ using React + Vite + Redux Toolkit + Context API
