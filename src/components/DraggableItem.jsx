import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";

const DraggableItem = ({ item, index, dragItemClasses, children }) => {
  console.log({ children });
  return (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={clsx("border-2 p-6", {
            [dragItemClasses]: snapshot.isDragging,
          })}
          style={{
            // default drag style
            ...provided.draggableProps.style,
          }}
        >
          {children(item)}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
