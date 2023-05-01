import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import { useSelector } from "react-redux";

// react-beautiful-dnd doesn't work with React 18 and upwards in Strict mode. The below HOC is the temporary fix
export const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = React.useState(false);
  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

export const Column = ({ column, dragItemClasses, ...otherProps }) => {
  const cards = useSelector((state) => state.cards);
  return (
    <div className='w-96 bg-slate-300 p-2 rounded-md'>
      <h2 className='font-medium mb-2'>
        {column.title}{" "}
        <span className='p-1 px-2 rounded-full font-light text-sm bg-indigo-100 text-indigo-500'>
          {column.cardIds.length}
        </span>
      </h2>
      <StrictModeDroppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='min-h-[50px] flex flex-col gap-2'
          >
            {column.cardIds.map((id, index) => (
              <DraggableItem
                key={id}
                index={index}
                draggableId={id}
                dragItemClasses={dragItemClasses}
                item={cards.byId[id]}
                {...otherProps}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </div>
  );
};
