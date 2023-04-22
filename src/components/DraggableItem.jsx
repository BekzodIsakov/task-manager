import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";
import GripIcon from "./icons/GripIcon";

const DraggableItem = ({ item, index, dragItemClasses, children }) => {
  return (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={clsx("border-2 p-6", {
            [dragItemClasses]: snapshot.isDragging,
          })}
          style={{
            // default drag style
            ...provided.draggableProps.style,
          }}
        >
          {item.firstName} {item.lastName}
          <div className='inline-block px-0.5 py-1 border-2' {...provided.dragHandleProps}>
            <GripIcon className={"w-4 h-4"} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
