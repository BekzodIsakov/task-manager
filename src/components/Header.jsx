import React from "react";
import AssigneesList from "./AssigneesList";
import { ASSIGNEES } from "../App";

const Header = () => {
  return (
    <div className='p-2 backdrop-blur-lg bg-white/20 flex justify-end'>
      <AssigneesList list={Array.from(ASSIGNEES.values())} />
    </div>
  );
};

export default Header;
