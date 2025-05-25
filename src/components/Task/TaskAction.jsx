import React from "react";

const TaskAction = () => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button className="rounded-md bg-primary cursor-pointer px-3.5 py-2.5 text-sm font-semibold">
          Add Task
        </button>
        <button className="rounded-md bg-red-500 cursor-pointer px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button>

        <select name="filterTask" id="filterTask" className="border border-light/30 px-3 py-2 rounded-md">
          <option value="starred">Starred</option>
          <option value="unstarred">Unstarred</option>
        </select>
       
      </div>
    </div>
  );
};

export default TaskAction;
