import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Notification = { id: string; title: string; text: string; read: boolean };

const initial: Notification[] = [
  { id: "1", title: "Workflow completed", text: "Search Pipeline finished.", read: false },
  { id: "2", title: "Document updated", text: "Search Architecture changed.", read: false },
  { id: "3", title: "API connected", text: "Production API is active.", read: true },
];

const slice = createSlice({
  name: "notifications",
  initialState: { items: initial },
  reducers: {
    markAllRead: (state) => { state.items.forEach((n) => { n.read = true; }); },
    addNotification: (state, action: PayloadAction<Notification>) => { state.items.unshift(action.payload); },
  },
});

export const { markAllRead, addNotification } = slice.actions;
export default slice.reducer;
