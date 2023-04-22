import * as React from "react";
import { Column } from "./components/Column";

const INITIAL_LIST = [
  {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
  },
  {
    id: "2",
    firstName: "Aiden",
    lastName: "Kettel",
  },
  {
    id: "3",
    firstName: "Jannet",
    lastName: "Layn",
  },
];

const App = () => {
  const [list, setList] = React.useState(INITIAL_LIST);

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
      <Column
        list={list}
        onDragEnd={handleDragEnd}
        dragItemClasses='shadow-xl'
      />
      
    </div>
  );
};

export default App;
