import { createSlice } from '@reduxjs/toolkit';

const updateLocalStorage = (items) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const getInitialCartState = () => {
  if (typeof localStorage !== 'undefined') {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  return [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getInitialCartState(),
  },
  
  reducers: {
    addToCart: (state, action) => {
      const { product, color, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, color, quantity });
      }
      updateLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const { product, color } = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.product._id !== product._id );
        }
      }
      updateLocalStorage(state.items);
    },
    incrementQuantity: (state, action) => {
      const { product, color } = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id  );
      if (existingItem) {
        existingItem.quantity += 1;
      }
      updateLocalStorage(state.items);
    },
    decrementQuantity: (state, action) => {
      const { product, color } = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id && item.color === color);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.product._id !== product._id || item.color !== color);
        }
      }
      updateLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {clearCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
