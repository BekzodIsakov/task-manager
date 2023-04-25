import * as React from "react";
import { Column } from "./components/Column";
import Header from "./components/Header";

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
      imgUrl: ''
    },
  ],
  [
    "assigneeId2",
    {
      id: "assigneeId2",
      firstName: "Jannet",
      lastName: "Layn",
      imgUrl: ''
    },
  ],
  [
    "assigneeId3",
    {
      id: "assigneeId3",
      firstName: "Aiden",
      lastName: "Kettel",
      imgUrl: ''
    },
  ],
]);

const CARDS = [
  {
    id: "1",
    task: "Deploy the app",
    description: "This is the dastk description for task id 1",
    assigneesIds: ["assigneeId1"],
    priorityIdx: 0,
  },
  {
    id: "2",
    task: "Change the styles",
    description: "This is the dastk description for task id 2",
    assigneesIds: ["assigneeId2", "assigneeId3"],
    priorityIdx: 2,
  },
  {
    id: "3",
    task: "Learn databases",
    description: "This is the dastk description for task id 3",
    assigneesIds: ["assigneeId3"],
    priorityIdx: 1,
  },
];

const App = () => {
  const [list, setList] = React.useState(CARDS);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = ({ destination, source }) => {
    console.log({ source, destination });
    if (!destination) return;

    setList(reorder(list, source.index, destination.index));
  };

  return (
    <div className='min-h-screen bg-cover'>
      <Header></Header>
      <Column
        list={list}
        onDragEnd={handleDragEnd}
        dragItemClasses='shadow-xl'
      />
    </div>
  );
};

export default App;
