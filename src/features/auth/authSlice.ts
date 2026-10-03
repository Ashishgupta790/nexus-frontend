import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = { isAuthenticated: boolean; user: { name: string; email: string } | null };

const saved = localStorage.getItem("nexus_auth");
const initialState: AuthState = saved
  ? JSON.parse(saved)
  : { isAuthenticated: false, user: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("nexus_auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("nexus_auth");
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
