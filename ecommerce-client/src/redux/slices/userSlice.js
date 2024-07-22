import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setReduxUser: (state,action) => {
            console.log("chagne redux user.")
            state.value = action.payload
        },
        logoutReduxUser: (state) => {
            state.value = null
            localStorage.removeItem("access_token")
        },
    },
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logoutReduxUser } = userSlice.actions

export default userSlice.reducer
