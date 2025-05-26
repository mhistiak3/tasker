import TaskSearch from "./TaskSearch";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { useState } from "react";
import AddTask from "./AddTask";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Javascript",
    description: "Javascript is Awesome",
    tags: ["nodejs", "react"],
    priority: "medium",
    isStarred: true,
  };
  // all state
  const [tasks, setTasks] = useState([initialTask]);
  const [filterTasks, setFilterTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  console.log(filterTasks);

  // Add task in task list
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setFilterTasks([...tasks, newTask]);
      setShowModal(false);
    } else {
      setShowModal(false);
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
      setFilterTasks(
        tasks.map((task) => (task.id === newTask.id ? newTask : task))
      );
      setTaskToUpdate(null);
    }
  };
  // Delete task from task list
  const handleDeleteTask = (taskId) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTaskList);
    setFilterTasks(newTaskList);
  };
  // Edit Task from task list
  const handleEditTask = (task) => {
    setShowModal(true);
    setTaskToUpdate(task);
  };

  // Add to starred task
  const handleStarredTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isStarred = !task.isStarred;
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilterTasks(updatedTasks);
  };

  // Filter Starred task
  const handleFilterTask = (e) => {
    const value = e.target.value;
    if (value === "starred") {
      setFilterTasks(tasks.filter((task) => task.isStarred));
    }
    if (value === "unstarred") {
      setFilterTasks(tasks.filter((task) => !task.isStarred));
    }
    if (value === "all") {
      setFilterTasks(tasks);
    }
  };

  // Delete All Task
  const handleDeleteAllTask = () => {
    if (window.confirm("Do you want to delete all tasks?")) {
      setTasks([]);
      setFilterTasks([]);
    }
  };

  // Search task
  // Debounce utility
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const handleSearchTask = debounce((value) => {
    const searchValue = value.trim().toLowerCase();
    if (!searchValue) {
      setFilterTasks(tasks);
      return;
    }
    setFilterTasks(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue)
      )
    );
  }, 300);

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  return (
    <>
      {showModal && (
        <div className="fixed w-full top-10 h-full z-10 bg-dark/80 flex justify-center items-center">
          <span
            className="absolute top-25 right-10 font-bold text-xl bg-light text-dark  py-1 px-3 rounded-full cursor-pointer"
            onClick={handleCloseModal}
          >
            X
          </span>
          <AddTask handleAddTask={handleAddTask} taskToUpdate={taskToUpdate} />
        </div>
      )}

      <section className="section" id="tasks">
        <div className="container">
          <TaskSearch handleSearchTask={handleSearchTask} />
          <div className="rounded-xl border border-light/30 bg-dark px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              handleAddTask={() => setShowModal(true)}
              handleFilterTask={handleFilterTask}
              handleDeleteAllTask={handleDeleteAllTask}
            />
            <div className="overflow-auto">
              <TaskList
                tasks={filterTasks}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
                handleStarredTask={handleStarredTask}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
