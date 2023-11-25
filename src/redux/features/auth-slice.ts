import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthState, InitialState } from "@/types"

const initialState = {
  value: {
    isAuth: false,
    username: "",
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state = initialState
      return state
    },
    logIn: (state, action: PayloadAction<string>) => {
      const user = action.payload
      state.value.username = user
      state.value.isAuth = true
      return state
    },
  },
})

export const { logIn, logOut } = auth.actions

export default auth.reducer
