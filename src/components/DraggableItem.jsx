import React from "react";
import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";

import {PRIORITIES, PRIORITY_COLORS, ASSIGNEES} from '../constants';
import GripIcon from "./icons/GripIcon";
import AssigneesList from "./AssigneesList";

const DraggableItem = ({ item, index, dragItemClasses }) => {
  const assignees = item?.assigneesIds.map((id) => ASSIGNEES.byId[id]);

  return (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={clsx(
            "p-4 rounded-md ",
            snapshot.isDragging && dragItemClasses,
            !snapshot.isDragging && "bg-slate-100"
          )}
          style={{
            // default drag style
            ...provided.draggableProps.style,
          }}
        >
          <div
            className='inline-block px-0.5 py-1 border-2'
            {...provided.dragHandleProps}
          >
            <GripIcon className={"w-4 h-4"} />
          </div>
          <div
            className={`w-6 h-2 rounded-md`}
            style={{
              backgroundColor: PRIORITY_COLORS[PRIORITIES[item.priorityIdx]],
            }}
          ></div>
          <h3>{item.task}</h3>
          <p>{item.description}</p>
          <div>{assignees && <AssigneesList list={assignees} />}</div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
