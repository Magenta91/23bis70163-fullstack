import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop', stock: 10 },
    { id: 2, name: 'Mouse', price: 29, description: 'Wireless mouse', stock: 50 },
    { id: 3, name: 'Keyboard', price: 79, description: 'Mechanical keyboard', stock: 30 },
  ],
  nextId: 4,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.nextId,
        ...action.payload,
      };
      state.products.push(newProduct);
      state.nextId += 1;
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
