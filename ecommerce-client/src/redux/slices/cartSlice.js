import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state,action) => {
            state.value.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
