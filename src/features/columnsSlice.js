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
    reorder: (state, action) => {
      const { source, destination } = action.payload;
      const sourceColumn = state.find((c) => c.id === source.droppableId);
      const destinationColumn = state.find(
        (c) => c.id === destination.droppableId
      );
      const [removed] = sourceColumn.cardIds.splice(source.index, 1);
      destinationColumn.cardIds.splice(destination.index, 0, removed);
    },
    remove: (state, action) => {
      state = state.filter((column) => column.id != action.payload.id);
    },
    addCardId: (state, action) => {
      const { cardId, columnId } = action.payload;
      console.log({ cardId, columnId });
      const column = state.find((c) => c.id == columnId);
      column?.cardIds.push(cardId);
    },
  },
});

export const { reorder, remove, addCardId } = columnsSlice.actions;
export default columnsSlice.reducer;
