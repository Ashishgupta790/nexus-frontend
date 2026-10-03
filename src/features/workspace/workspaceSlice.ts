import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Theme } from "../../types";

type WorkspaceState = {
  theme: Theme;
  compactMode: boolean;
  animations: boolean;
  sidebarOpen: boolean;
  workspaceName: string;
};

const initialState: WorkspaceState = {
  theme: "dark",
  compactMode: false,
  animations: true,
  sidebarOpen: true,
  workspaceName: "Ragini's Workspace",
};

const slice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => { state.theme = action.payload; },
    toggleCompact: (state) => { state.compactMode = !state.compactMode; },
    toggleAnimations: (state) => { state.animations = !state.animations; },
    toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen; },
    setWorkspaceName: (state, action: PayloadAction<string>) => { state.workspaceName = action.payload; },
  },
});

export const { setTheme, toggleCompact, toggleAnimations, toggleSidebar, setWorkspaceName } = slice.actions;
export default slice.reducer;
