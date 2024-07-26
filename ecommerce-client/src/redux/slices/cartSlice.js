import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      /* check if item already exits in redux cart */
      let matchedCartItem = state.value.find((el) => el._id == action.payload._id); // {}
      if (matchedCartItem) {
        matchedCartItem.quantity = matchedCartItem.quantity + 1; // due to reference datatype
      } else {
        state.value.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    
    changeQuantity: (state, action) => {
      let { _id, type } = action.payload;
      let matchedCartItem = state.value.find((el) => el._id == _id); // { .... }
      if (type == "increment") {
        matchedCartItem.quantity += 1;
      } else if (type == "decrement") {
        if (matchedCartItem.quantity > 1) {
          matchedCartItem.quantity -= 1;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, changeQuantity: changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
