import { IAppAssets } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface AppState {
  value: IAppAssets;
  status: "idle" | "loading" | "failed";
}

// Valores iniciais (estado inicial)
const initialState: AppState = {
  value: {
    topBarHeight: 0,
  },
  status: "idle",
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateTopBarHeight: (state, action: PayloadAction<number>) => {
      state.value.topBarHeight = action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { updateTopBarHeight } = appSlice.actions;

export const selectApp = (state: RootState) => state.appReducer.value;

// Export the slice reducer for use in the store configuration
export default appSlice.reducer;
