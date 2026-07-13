import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    Cartdata:[],
  },
  reducers: {
   addItem:(state, action) => {
    state.Cartdata.push(action.payload);
   },
   removeItem: (state, action) => {
      const id = action.payload;
      // findLastIndex replacement — works everywhere
      let index = -1;
      for (let i = state.Cartdata.length - 1; i >= 0; i--) {
        if (state.Cartdata[i].card.info.id === id) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        state.Cartdata.splice(index, 1);
      }
    },
  }
})

export const { addItem, removeItem } = CartSlice.actions

export default CartSlice.reducer