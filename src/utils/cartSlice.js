import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[]
  },
  reducers: {

    addItems : (state, action) =>{
      //mutating the state here
      state.items.push(action.payload);
    },

    clearCart:(state)=>{
      state.items.length = 0;
    },

    removeItem: (state)=>{
      state.items.pop();
    }

  }
  
});

export const {addItems, clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;