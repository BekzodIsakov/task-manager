import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";

const DraggableItem = ({ item, index, dragItemClasses }) => {
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
          {item.firstName} {item.lastName}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
