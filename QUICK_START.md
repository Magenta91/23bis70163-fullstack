# Quick Start Guide

## 🚀 Running the Application

The application is currently running at: **http://localhost:5173/**

## 👥 Test Accounts

### Admin Account
- **Username:** Any name (e.g., "admin", "john")
- **Role:** Select "Admin"
- **Permissions:** Full access to add, edit, and delete products

### User Account
- **Username:** Any name (e.g., "user", "jane")
- **Role:** Select "User"
- **Permissions:** View products and manage cart only

## ✨ Features to Try

### As Admin:
1. **Login** as admin role
2. Click "➕ Add New Product" button
3. Fill in product details and submit
4. **Edit** any product using the "Edit" button
5. **Delete** products using the "Delete" button
6. Add products to cart and checkout

### As User:
1. **Login** as user role
2. Browse the product catalog
3. Add products to cart
4. Update quantities in cart
5. Remove items or clear cart

## 🎯 State Management Demo

### Context API (Authentication)
- Login/Logout functionality
- User information display in header
- Role-based UI rendering

### Redux Toolkit (Products & Cart)
- Product CRUD operations
- Shopping cart management
- Real-time state updates

## 📝 Key Components

1. **Header** - Shows user info, cart count, logout button
2. **Login** - Authentication form with role selection
3. **Product List** - Displays all products with role-based actions
4. **Product Form** - Add/Edit products (Admin only)
5. **Cart** - Shopping cart with quantity management

## 🎨 UI Features

- Responsive design for all screen sizes
- Gradient color scheme
- Smooth animations and transitions
- Real-time cart badge updates
- Confirmation dialogs for destructive actions

## 🔍 Testing the Integration

1. **Test Context API:**
   - Login with different roles
   - Observe UI changes based on role
   - Check header shows correct user info

2. **Test Redux (Products):**
   - Add a new product (admin)
   - Edit existing product (admin)
   - Delete a product (admin)
   - Verify changes reflect immediately

3. **Test Redux (Cart):**
   - Add items to cart
   - Update quantities
   - Remove items
   - Clear cart
   - Check total calculation

## 🐛 Common Issues

**Cart not updating?**
- Refresh the page
- Check Redux DevTools if installed

**Can't see admin features?**
- Make sure you logged in with "Admin" role
- Logout and login again if needed

**Page not loading?**
- Check if dev server is running
- Visit http://localhost:5173/

---

Enjoy exploring the state management features! 🎉
