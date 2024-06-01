import { createSlice, createAction } from "@reduxjs/toolkit";

export type AuthStateInterface = {
  isAuthenticated: boolean;
  wasFailedToLogin: boolean;
};

const initialState: AuthStateInterface = {
  isAuthenticated: false,
  wasFailedToLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginFail: (state) => {
      state.wasFailedToLogin = true;
      state.isAuthenticated = false;
    },
    loginSuccess: (state) => {
      state.wasFailedToLogin = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const initApp = createAction("init application");
export const loginRequest = createAction<{
  username: string;
  password: string;
}>("login request");

export const { loginFail, loginSuccess, logout, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
