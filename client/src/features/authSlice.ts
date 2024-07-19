import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/userModel";

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("auth") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      if (!action.payload.token) return;

      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("auth", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export type { AuthState };
