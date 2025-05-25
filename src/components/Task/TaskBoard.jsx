import TaskSearch from "./TaskSearch";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <section className="section" id="tasks">
      <div className="container">
      <TaskSearch/>
        <div className="rounded-xl border border-light/30 bg-dark px-6 py-8 md:px-9 md:py-16">
          <TaskAction/>
          <div className="overflow-auto">
            <TaskList/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
