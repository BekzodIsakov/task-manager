import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cardsSlice";
import columnsReducer from "../features/columnsSlice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    columns: columnsReducer,
  },
});
