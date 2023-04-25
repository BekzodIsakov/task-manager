import * as React from "react";
import { Column } from "./components/Column";
import Header from "./components/Header";
import { DragDropContext } from "react-beautiful-dnd";

export const PRIORITIES = ["low", "middle", "high"];
export const PRIORITY_COLORS = {
  low: "#22c55e",
  middle: "#3b82f6",
  high: "#ef4444",
};

export const ASSIGNEES = new Map([
  [
    "assigneeId1",
    {
      id: "assigneeId1",
      firstName: "Robin",
      lastName: "Wieruch",
      imgUrl: "",
    },
  ],
  [
    "assigneeId2",
    {
      id: "assigneeId2",
      firstName: "Jannet",
      lastName: "Layn",
      imgUrl: "",
    },
  ],
  [
    "assigneeId3",
    {
      id: "assigneeId3",
      firstName: "Aiden",
      lastName: "Kettel",
      imgUrl: "",
    },
  ],
  [
    "assigneeId4",
    {
      id: "assigneeId4",
      firstName: "Robin",
      lastName: "Wieruch",
      imgUrl: "",
    },
  ],
  [
    "assigneeId5",
    {
      id: "assigneeId5",
      firstName: "Jannet",
      lastName: "Layn",
      imgUrl: "",
    },
  ],
  [
    "assigneeId6",
    {
      id: "assigneeId6",
      firstName: "Aiden",
      lastName: "Kettel",
      imgUrl: "",
    },
  ],
]);

const COLUMNS = [
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

export const CARDS = [
  {
    id: "1",
    task: "Deploy the app",
    description: "This is the task description for task id 1",
    assigneesIds: ["assigneeId1"],
    priorityIdx: 0,
  },
  {
    id: "2",
    task: "Change the styles",
    description: "This is the task description for task id 2",
    assigneesIds: ["assigneeId2", "assigneeId3"],
    priorityIdx: 2,
  },
  {
    id: "3",
    task: "Learn databases",
    description: "This is the task description for task id 3",
    assigneesIds: ["assigneeId3"],
    priorityIdx: 1,
  },
  {
    id: "4",
    task: "Find the round-up 6",
    description: "This is the task description for task id 4",
    assigneesIds: ["assigneeId4"],
    priorityIdx: 2,
  },
  {
    id: "5",
    task: "Pack the clothes",
    description: "This is the task description for task id 5",
    assigneesIds: ["assigneeId5"],
    priorityIdx: 0,
  },
  {
    id: "6",
    task: "Finish the weather app",
    description: "This is the task description for task id 6",
    assigneesIds: ["assigneeId6", "assigneeId1"],
    priorityIdx: 0,
  },
  {
    id: "7",
    task: "Clean the room",
    description: "This is the task description for task id 7",
    assigneesIds: ["assigneeId1", "assigneeId4"],
    priorityIdx: 0,
  },
  {
    id: "8",
    task: "Work out",
    description: "This is the task description for task id 8",
    assigneesIds: ["assigneeId3"],
    priorityIdx: 1,
  },
  {
    id: "9",
    task: "Drag-n-drop between columns",
    description: "This is the task description for task id 9",
    assigneesIds: ["assigneeId6", "assigneeId5"],
    priorityIdx: 2,
  },
];

const App = () => {
  const [columns, setColumns] = React.useState(COLUMNS);

  const reorder = (list, source, destination) => {
    const result = Array.from(list);
    const sourceColumn = result.find((c) => c.id === source.droppableId);
    const destinationColumn = result.find(
      (c) => c.id === destination.droppableId
    );
    const [removed] = sourceColumn.cardIds.splice(source.index, 1);
    destinationColumn.cardIds.splice(destination.index, 0, removed);

    return result;
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    setColumns(reorder(columns, source, destination));
  };

  return (
    <div className='min-h-screen bg-cover'>
      <Header />
      <div className='flex'>
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              dragItemClasses='shadow-xl'
            />
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
