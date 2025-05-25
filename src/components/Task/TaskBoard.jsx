import TaskSearch from "./TaskSearch";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { useState } from "react";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Javascript",
    description: "Javascript is Awesome",
    tags: ["nodejs", "react"],
    priority: "medium",
    isStarred: true,
  };
  const [tasks, setTasks] = useState([{...initialTask}]);
  return (
    <section className="section" id="tasks">
      <div className="container">
        <TaskSearch />
        <div className="rounded-xl border border-light/30 bg-dark px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <div className="overflow-auto">
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
