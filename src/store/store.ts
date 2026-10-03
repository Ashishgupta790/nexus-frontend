import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import workspaceReducer from "../features/workspace/workspaceSlice";
import projectReducer from "../features/projects/projectSlice";
import workflowReducer from "../features/workflows/workflowSlice";
import searchReducer from "../features/search/searchSlice";
import notificationReducer from "../features/notifications/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workspace: workspaceReducer,
    projects: projectReducer,
    workflows: workflowReducer,
    search: searchReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
