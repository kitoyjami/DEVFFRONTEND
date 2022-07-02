import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
// Obtener datos de localstorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user || null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: ''
}

// Registrar un nuevo usuario

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    const message = (
      error.response &&
                        error.response.data &&
                        error.response.data.message
    ) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Login

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message = (
      error.response &&
                        error.response.data &&
                        error.response.data.message
    ) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Cerrar sesión
export const logout = createAsyncThunk('auth/logout',
  async (user, thunkAPI) => {
    await authService.logout()
  })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSucces = false
      state.isLoading = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSucces = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSucces = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer
