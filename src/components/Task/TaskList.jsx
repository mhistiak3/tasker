import TaskNotFound from "./TaskNotFound";

const TaskList = ({
  tasks,
  handleDeleteTask,
  handleEditTask,
  handleStarredTask,
}) => {
  // You can place this function in a utility file or at the top of your component

  function getRandomColorCode() {
    // Generate random hex for R, G, B (2 digits each)
    const r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  }

  return (
    <>
      {tasks.length > 0 ? (
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]">
                Favorite
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize  md:w-full">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                Tags
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr
                  key={task?.id}
                  className="border-b border-b-light/30 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                >
                  <td>
                    <svg
                      onClick={() => handleStarredTask(task.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`icon icon-tabler icon-tabler-star stroke-primary cursor-pointer ${
                        task.isStarred && "fill-primary"
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="yellow"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </td>
                  <td className="text-center">{task.title}</td>
                  <td className="text-center">
                    <div className="text-sm md:text-base">
                      {task.description}
                    </div>
                  </td>
                  <td className="text-center">
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                      {task.tags.map((tag) => (
                        <li key={tag}>
                          <span
                            className={`inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-light`}
                            style={{ backgroundColor: getRandomColorCode() }}
                          >
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-center">{task?.priority}</td>
                  <td>
                    <div className="flex items-center justify-center space-x-3 cursor-pointer">
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-primary"
                        onClick={() => handleEditTask(task)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <TaskNotFound />
      )}
    </>
  );
};

export default TaskList;
