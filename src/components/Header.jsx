import React from "react";
import AssigneesList from "./AssigneesList";
import { ASSIGNEES } from "../constants";

const Header = () => {
  return (
    <div className='p-2 backdrop-blur-lg bg-white/50 flex justify-end'>
      <AssigneesList list={ASSIGNEES.allIds.map(id => ASSIGNEES.byId[id])} />
    </div>
  );
};

export default Header;
