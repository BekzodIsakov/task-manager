import React from "react";
import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";

import { ASSIGNEES, PRIORITIES, PRIORITY_COLORS } from "../App";
import GripIcon from "./icons/GripIcon";

const DraggableItem = ({ item, index, dragItemClasses, children }) => {
  const assignees = item?.assigneesIds.map((id) => ASSIGNEES.get(id));

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
          <div
            className={`w-6 h-2 rounded-md`}
            style={{
              backgroundColor: PRIORITY_COLORS[PRIORITIES[item.priorityIdx]],
            }}
          ></div>
          <h3>{item.task}</h3>
          <p>{item.description}</p>
          <div>
            {assignees &&
              assignees.map((a) => (
                <div key={a.id}>
                  <img
                    src={`https://eu.ui-avatars.com/api/?name=${a.firstName}+${a.lastName}&size=80`}
                    alt={a.firstName + " " + a.lastName}
                    title={a.firstName + " " + a.lastName}
                  />
                </div>
              ))}
          </div>
          <div
            className='inline-block px-0.5 py-1 border-2'
            {...provided.dragHandleProps}
          >
            <GripIcon className={"w-4 h-4"} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
