import * as React from "react";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { Column } from "./components/Column";
import Header from "./components/Header";

export const PRIORITIES = ["low", "middle", "high"];
export const PRIORITY_COLORS = {
  low: "#22c55e",
  middle: "#3b82f6",
  high: "#ef4444",
};

export const ASSIGNEES = {
  byId: {
    assigneeId1: {
      id: "assigneeId1",
      firstName: "Robin",
      lastName: "Wieruch",
      imgUrl: "/image-3.jpg",
    },
    assigneeId2: {
      id: "assigneeId2",
      firstName: "Jannet",
      lastName: "Layn",
      imgUrl: "/image-4.jpg",
    },
    assigneeId3: {
      id: "assigneeId3",
      firstName: "Aiden",
      lastName: "Kettel",
      imgUrl: "/image-5.jpg",
    },
    assigneeId4: {
      id: "assigneeId4",
      firstName: "Robin",
      lastName: "Wieruch",
      imgUrl: "",
    },
    assigneeId5: {
      id: "assigneeId5",
      firstName: "Jannet",
      lastName: "Layn",
      imgUrl: "/image-2.jpg",
    },
    assigneeId6: {
      id: "assigneeId6",
      firstName: "Aiden",
      lastName: "Kettel",
      imgUrl: "/image-1.jpg",
    },
  },
  allIds: [
    "assigneeId1",
    "assigneeId2",
    "assigneeId3",
    "assigneeId4",
    "assigneeId5",
    "assigneeId6",
  ],
};

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
    <div className='min-h-screen bg-cover bg-fixed bg-sky'>
      <Header />
      <div className='flex items-start gap-x-4 p-4'>
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              dragItemClasses='shadow-xl backdrop-blur-md bg-white/30'
            />
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
