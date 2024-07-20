import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/userModel";

interface AuthState {
  user: User | null;
  token: string | null;
  loged?: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("auth") || null,
  loged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      if (!action.payload.token) return;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loged = true;

      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loged = false;

      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export type { AuthState };
