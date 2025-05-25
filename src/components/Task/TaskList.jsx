const TaskList = ({ tasks }) => {
  return (
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
        {tasks && tasks.length > 0
          ? tasks.map((task) => (
              <tr
                id={task?.id}
                className="border-b border-b-light/30 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`icon icon-tabler icon-tabler-star stroke-primary ${
                      task.isStarred && "fill-primary"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="yellow"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </td>
                <td className="text-center">{task.title}</td>
                <td className="text-center">
                  <div className="text-sm md:text-base">{task.description}</div>
                </td>
                <td className="text-center">
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <li>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-light">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">{task?.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-red-500">Delete</button>
                    <button className="text-primary">Edit</button>
                  </div>
                </td>
              </tr>
            ))
          : ""}
      </tbody>
    </table>
  );
};

export default TaskList;
