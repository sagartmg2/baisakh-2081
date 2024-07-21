import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: ["default cart value"],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state) => {
            state.value.push("new item")
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
