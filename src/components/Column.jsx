import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";

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

export const Column = ({ list, onDragEnd, dragItemClasses, ...otherProps }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId='droppable'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((item, index) => (
              <DraggableItem
                key={item.id}
                index={index}
                draggableId={item.id}
                dragItemClasses={dragItemClasses}
                item={item}
                {...otherProps}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};
