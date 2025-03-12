import { DBrasileiraoPlayer } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Tipagem para o objeto
export interface BrasileiraoPlayerState {
  value: DBrasileiraoPlayer[];
  status: "idle" | "loading" | "failed";
}

// Valores iniciais (estado inicial)
const initialState: BrasileiraoPlayerState = {
  value: [],
  status: "idle",
};

// https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions
// https://chatgpt.com/share/67d0aec1-e84c-8001-9d40-6dd84a34a2a2

export const brasileiraoPlayerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateBrasileiraoPlayerList: (
      state,
      action: PayloadAction<DBrasileiraoPlayer[]>
    ) => {
      state.value = action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { updateBrasileiraoPlayerList } = brasileiraoPlayerSlice.actions;

export const selectBrasileiraoPlayerList = (state: RootState) =>
  state.brasileiraoPlayerReducer.value;

// Export the slice reducer for use in the store configuration
export default brasileiraoPlayerSlice.reducer;
