import React from "react";
import AssigneesList from "./AssigneesList";
import { ASSIGNEES } from "../App";

const Header = () => {
  return (
    <div className='p-1 bg-blue-300 flex justify-end'>
      <AssigneesList list={Array.from(ASSIGNEES.values())} />
    </div>
  );
};

export default Header;
