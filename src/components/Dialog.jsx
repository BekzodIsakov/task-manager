import React from "react";
import Input from "./Input";
import { ASSIGNEES, PRIORITIES } from "../constants";
import Select from "./Select";
import { useDispatch } from "react-redux";
import { create } from "../features/cardsSlice";
import { addCardId } from "../features/columnsSlice";

const Dialog = (props) => {
  const dialogRef = React.useRef();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priorityIdx, setPriorityIdx] = React.useState(0);
  const [assignees, setAssignees] = React.useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardId = String(Date.now());
    dispatch(
      addCardId({
        cardId,
        columnId: props.columnId,
      })
    );
    dispatch(
      create({
        cardId,
        columnId: props.columnId,
        title,
        description,
        priorityIdx,
        assigneesIds: assignees,
      })
    );
  };

  return (
    <div
      onClick={props.handleClose}
      ref={dialogRef}
      className='fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/40'
    >
      <div
        className='w-11/12 max-w-screen-sm drop-shadow-2xl rounded-md bg-slate-200 p-4'
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <div>
              <label htmlFor='title'>Title</label>
              <Input
                id='title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>

            <div>
              <label htmlFor='description'>Description</label>
              <div>
                <textarea
                  id='description'
                  className='w-full p-1 rounded-md'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div>
              <label htmlFor='priority'>Priority</label>
              <select
                name='priority'
                id='priority'
                className='w-full capitalize p-1 rounded-md'
                onChange={(e) => setPriorityIdx(e.target.value)}
              >
                {PRIORITIES.map((p, i) => (
                  <option key={i} value={i}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <label htmlFor='assignees'>Assignees</label>
            <Select
              selectId={"assignees"}
              ref={dialogRef}
              onSelect={setAssignees}
              data={ASSIGNEES.allIds.map((id) => ({
                fullName:
                  ASSIGNEES.byId[id].firstName +
                  " " +
                  ASSIGNEES.byId[id].lastName,
                id,
              }))}
            />
          </div>
          <button
            disabled={!title}
            type='submit'
            className='disabled:opacity-60 mt-4 ml-auto mr-0 block bg-blue-200 px-2 py-1 rounded-md'
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
