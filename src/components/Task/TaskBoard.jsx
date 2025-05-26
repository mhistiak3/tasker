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

  // Single source of truth for tasks
  const [tasks, setTasks] = useState([initialTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [starFilter, setStarFilter] = useState("all"); // "all", "starred", "unstarred"

  // Compute filtered tasks directly in render
  const getFilteredTasks = () => {
    let filtered = [...tasks];

    // Apply search filter
    if (searchTerm.trim()) {
      const searchValue = searchTerm.trim().toLowerCase();
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchValue)
      );
    }

    // Apply star filter
    if (starFilter === "starred") {
      filtered = filtered.filter((task) => task.isStarred);
    } else if (starFilter === "unstarred") {
      filtered = filtered.filter((task) => !task.isStarred);
    }

    return filtered;
  };

  // Add task in task list
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setShowModal(false);
    } else {
      setShowModal(false);
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
      setTaskToUpdate(null);
    }
    // getFilteredTasks()
  };

  // Delete task from task list
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Edit Task from task list
  const handleEditTask = (task) => {
    setShowModal(true);
    setTaskToUpdate(task);
  };

  // Add to starred task
  const handleStarredTask = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId 
        ? { ...task, isStarred: !task.isStarred }
        : task
    ));
  };

  // Filter Starred task
  const handleFilterTask = (e) => {
    setStarFilter(e.target.value);
  };

  // Delete All Task
  const handleDeleteAllTask = () => {
    if (window.confirm("Do you want to delete all tasks?")) {
      setTasks([]);
    }
  };

  // Search task with debounce
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const handleSearchTask = debounce((value) => {
    setSearchTerm(value);
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
            className="absolute top-25 right-10 font-bold text-xl bg-light text-dark py-1 px-3 rounded-full cursor-pointer"
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
                tasks={getFilteredTasks()}
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