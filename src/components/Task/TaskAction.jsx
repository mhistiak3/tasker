const TaskAction = ({ handleAddTask, handleFilterTask,handleDeleteAllTask }) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-primary cursor-pointer px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleAddTask}
        >
          Add Task
        </button>
        <button className="rounded-md bg-red-500 cursor-pointer px-3.5 py-2.5 text-sm font-semibold" onClick={handleDeleteAllTask}>
          Delete All
        </button>

        <select
          name="filterTask"
          id="filterTask"
          className="border border-light/30 px-3 py-2 rounded-md"
          onChange={handleFilterTask}
        >
          <option value="all">Select</option>
          <option value="starred">Starred</option>
          <option value="unstarred">UnStarred</option>
        </select>
      </div>
    </div>
  );
};

export default TaskAction;
