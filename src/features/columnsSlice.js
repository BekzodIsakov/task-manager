import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "column1",
    title: "To do",
    cardIds: ["1", "2", "3"],
  },
  {
    id: "column2",
    title: "In progress",
    cardIds: ["4", "5", "6"],
  },
  {
    id: "column3",
    title: "Done",
    cardIds: ["7", "8", "9"],
  },
];

export const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    remove: (state, action) => {
      state = state.filter((column) => column.id != action.payload.id);
    },
    reorder: (state, action) => {
      const { source, destination } = action.payload;
    },
  },
});

export const { remove } = columnsSlice.actions;
export default columnsSlice.reducer;
