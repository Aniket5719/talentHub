import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    user: null,
    token: null,
    role: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginData, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:5000/users')
            const allUser = res.data
            const foundUser = allUser.find(
                current => current.email === loginData.email
                    &&
                    current.password === loginData.password
            )
            if (!foundUser) {
                return thunkAPI.rejectWithValue('Invalid credential')
            }
            const token = `mock-token-${foundUser.id}`
            localStorage.setItem('token', token)
            return {
                user: foundUser,
                token,
                role: 'candidate'
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.role = action.payload.role
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.role = null
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
            state.error = null
        }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.token = action.payload.token
                state.role = action.payload.role
                state.isAuthenticated = true
            }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })
    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions