import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser : (state, action) => {
            state.auth = action.payload
        }
    }
})

export const {setUser} = AuthSlice.actions
export default AuthSlice.reducer