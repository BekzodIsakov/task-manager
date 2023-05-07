import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { Column } from "./components/Column";
import Header from "./components/Header";
import { reorder } from "./features/columnsSlice";

const App = () => {
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  const [bgImage, setBgImage] = React.useState("mountain");

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    dispatch(reorder({ destination, source }));
  };

  return (
    <div className={`min-h-screen bg-cover bg-fixed bg-${bgImage}`}>
      <Header />
      
      <div className='flex flex-col sm:flex-row sm:items-start gap-4 p-4'>
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
