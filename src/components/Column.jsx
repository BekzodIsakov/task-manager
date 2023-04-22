import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import clsx from "clsx";
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

export const Column = ({ list, onDragEnd, dragItemClasses }) => {
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
              />
              // <Draggable key={item.id} index={index} draggableId={item.id}>
              //   {(provided, snapshot) => (
              //     <div
              //       ref={provided.innerRef}
              //       {...provided.draggableProps}
              //       {...provided.dragHandleProps}
              //       className={clsx("border-2 p-6", {
              //         [dragItemClasses]: snapshot.isDragging,
              //       })}
              //       style={{
              //         // default drag style
              //         ...provided.draggableProps.style,
              //       }}
              //     >
              //       {item.firstName} {item.lastName}
              //     </div>
              //   )}
              // </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};
