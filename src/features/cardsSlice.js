import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byId: {
    1: {
      id: "1",
      task: "Deploy the app",
      description: "This is the task description for task id 1",
      assigneesIds: ["assigneeId1"],
      priorityIdx: 0,
    },
    2: {
      id: "2",
      task: "Change the styles",
      description: "This is the task description for task id 2",
      assigneesIds: ["assigneeId2", "assigneeId3"],
      priorityIdx: 2,
    },
    3: {
      id: "3",
      task: "Learn databases",
      description: "This is the task description for task id 3",
      assigneesIds: ["assigneeId3"],
      priorityIdx: 1,
    },
    4: {
      id: "4",
      task: "Find the round-up 6",
      description: "This is the task description for task id 4",
      assigneesIds: ["assigneeId4"],
      priorityIdx: 2,
    },
    5: {
      id: "5",
      task: "Pack the clothes",
      description: "This is the task description for task id 5",
      assigneesIds: ["assigneeId5"],
      priorityIdx: 0,
    },
    6: {
      id: "6",
      task: "Finish the weather app",
      description: "This is the task description for task id 6",
      assigneesIds: ["assigneeId6", "assigneeId1"],
      priorityIdx: 0,
    },
    7: {
      id: "7",
      task: "Clean the room",
      description: "This is the task description for task id 7",
      assigneesIds: ["assigneeId1", "assigneeId4"],
      priorityIdx: 0,
    },
    8: {
      id: "8",
      task: "Work out",
      description: "This is the task description for task id 8",
      assigneesIds: ["assigneeId3"],
      priorityIdx: 1,
    },
    9: {
      id: "9",
      task: "Drag-n-drop between columns",
      description: "This is the task description for task id 9",
      assigneesIds: ["assigneeId6", "assigneeId5"],
      priorityIdx: 2,
    },
  },
  allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    create: (state, action) => {
      const {
        cardId,
        columnId,
        title,
        description,
        priorityIdx,
        assigneesIds,
      } = action.payload;
      console.log({
        cardId,
        columnId,
        title,
        description,
        priorityIdx,
        assigneesIds,
      });

      state.allIds.push(cardId);
      state.byId[cardId] = {
        id: cardId,
        task: title,
        description,
        priorityIdx,
        assigneesIds,
      };
    },
  },
});

export const { create } = cardsSlice.actions;
export default cardsSlice.reducer;
