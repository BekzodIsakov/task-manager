import React from "react";
import Input from "./Input";
import { ASSIGNEES, PRIORITIES } from "../App";

const Dialog = (props) => {
  return (
    <div
      onClick={props.handleClose}
      className='fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/40 backdrop-blur-10'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-11/12 max-w-screen-sm drop-shadow-2xl rounded-md flex flex-col gap-3 bg-slate-300 p-4'
      >
        <div>
          <label htmlFor='title'>Title</label>
          <Input id='title' />
        </div>

        <div>
          <label htmlFor='description' className=''>
            Description
          </label>
          <div>
            <textarea
              id='description'
              className='w-full p-1 rounded-md'
            ></textarea>
          </div>
        </div>

        <div>
          <label htmlFor='title'>Priority</label>
          <select name='priority' className='w-full capitalize p-1 rounded-md'>
            {PRIORITIES.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='assignees'>Assignees</label>
          <input
            list='assignees'
            name='browser'
            id='browser'
            className='w-full p-1 rounded-md'
          />
          <datalist id='assignees'>
            {ASSIGNEES.allIds.map((id) => (
              <option
                key={id}
                value={
                  ASSIGNEES.byId[id].firstName +
                  " " +
                  ASSIGNEES.byId[id].lastName
                }
              />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
