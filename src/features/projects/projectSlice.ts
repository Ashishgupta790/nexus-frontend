import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { projects } from "../../data/projects";

type State = { selectedProjectId: string | null; items: typeof projects };

const slice = createSlice({
  name: "projects",
  initialState: { selectedProjectId: null, items: projects } as State,
  reducers: {
    selectProject: (state, action: PayloadAction<string | null>) => {
      state.selectedProjectId = action.payload;
    },
  },
});

export const { selectProject } = slice.actions;
export default slice.reducer;
