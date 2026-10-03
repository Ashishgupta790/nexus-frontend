import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { workflows } from "../../data/workflows";

type State = {
  selectedNodeId: string | null;
  running: boolean;
  executionStep: number;
  items: typeof workflows;
};

const slice = createSlice({
  name: "workflows",
  initialState: { selectedNodeId: null, running: false, executionStep: -1, items: workflows } as State,
  reducers: {
    selectNode: (state, action: PayloadAction<string | null>) => { state.selectedNodeId = action.payload; },
    startExecution: (state) => { state.running = true; state.executionStep = 0; },
    advanceExecution: (state) => { state.executionStep += 1; },
    stopExecution: (state) => { state.running = false; },
  },
});

export const { selectNode, startExecution, advanceExecution, stopExecution } = slice.actions;
export default slice.reducer;
