import { useState } from "react";

const AddTask = ({ handleAddTask, taskToUpdate }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isStarred: false,
    }
  );
  // eslint-disable-next-line no-unused-vars
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  // Handle task Field
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "tags") {
      const tags = value.split(",");
      setTask({ ...task, tags });
    } else {
      setTask({ ...task, [name]: value });
    }
  }

  // handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(task, isAdd);
    setTask({
      title: "",
      description: "",
      tags: [],
      priority: "",
      isStarred: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-10 w-full max-w-[640px] rounded-xl border border-light/30 bg-dark p-9 max-md:px-4 "
    >
      <h2 className="mb-9 text-center text-2xl font-bold text-white ">
        {isAdd ? "Add New Task" : "Update task"}
      </h2>

      {/* <!-- inputs --> */}
      <div className="space-y-9 text-white ">
        {/* <!-- title --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-light/10 px-3 py-2.5"
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            id="title"
            required
          />
        </div>
        {/* <!-- description --> */}
        <div className="space-y-2 ">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-light/10 px-3 py-2.5"
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            id="description"
            required
          ></textarea>
        </div>
        {/* <!-- input group --> */}
        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          {/* <!-- tags --> */}
          <div className="space-y-2 ">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-light/10 px-3 py-2.5"
              type="text"
              name="tags"
              value={task.tags}
              onChange={handleChange}
              id="tags"
              required
            />
          </div>
          {/* <!-- priority --> */}
          <div className="space-y-2">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-light/10 px-3 py-2.5"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              id="priority"
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- inputs ends --> */}
      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-primary px-4 py-2 text-white transition-all hover:opacity-80"
        >
          {!isAdd ? "Edit task" : "Create new Task"}
        </button>
      </div>
    </form>
  );
};

export default AddTask;
