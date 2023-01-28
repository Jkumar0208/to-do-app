import { useState } from "react";
import './App.css';
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";

function App() {

  const [taskInput, setTaskInput] = useState("");
  const [addNewTaskMode, setAddNewTaskMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [editTaskMode, setEditTaskMode] = useState(false);
  const [targetTaskToEdit, setTargetTaskToEdit] = useState(null);

  function numberOfTasks() {
    return count === 0 ? "Zero" : count;
  }

  function getBadgeClasses() {
    const baseClasses = "badge bg-";
    return count === 0 ? baseClasses + "warning text-dark" : baseClasses + "primary";
  }

  function handleNewTask() {
    setAddNewTaskMode(true);
  }

  function handleUserInput(e) {
    const value = e.target.value;
    setTaskInput(value);
    //console.log(value);
  }

  function handleSaveTask(e) {
    e.preventDefault();
    if (!taskInput.length) {
      setAddNewTaskMode(false);
    } else {
      const newTask = {
        description: taskInput,
        id: uuidv4(),
        completed: false,
        createdAt: Date.now()
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      setAddNewTaskMode(false);
      setCount(count + 1);
    }
  }

  function handleMarkAsDone(task) {
    const targetTask = tasks.find((t) => t.id === task.id);
    targetTask.completed = !targetTask.completed;
    setTasks([...tasks.filter((t) => t.id !== task.id), targetTask]);
  }

  function handleDelete(task) {
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => {
        return item.id !== task.id;
      });
    })
    setCount(count - 1);
  }

  function handleEditTask(task) {
    setEditTaskMode(true);
    setTargetTaskToEdit(task);
  }

  function handleSaveEditedTask(e) {
    e.preventDefault();
    if (!taskInput.length) {
      setEditTaskMode(false);
    } else {
      const editedTask = { ...targetTaskToEdit, description: taskInput };
      setTasks([...tasks.filter((t) => t.id !== targetTaskToEdit.id), editedTask]);
      setTaskInput("");
      setEditTaskMode(false);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 id="logo">To-do App</h1>
          <h2>
            You have{" "}
            <span className={getBadgeClasses()}>
              {numberOfTasks()}
            </span>{" "}
            task{count > 1 && "s"} pending
          </h2>
        </div>
        <div className="col-12 text-center m-2">
          <button
            disabled={editTaskMode}
            className="btn btn-secondary btn-lg"
            onClick={handleNewTask}
          >
            Add task
          </button>
        </div>

        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-8 text-center m-2">
          {addNewTaskMode && (
            <NewTask
              onInput={handleUserInput}
              onSave={handleSaveTask}
            />
          )}

          {editTaskMode && (
            <EditTask
              onInput={handleUserInput}
              onSaveEdit={handleSaveEditedTask}
              targetTask={targetTaskToEdit}
            />
          )}
        </div>

        {count > 0 && !addNewTaskMode && !editTaskMode && (
          <TaskList
            tasks={tasks}
            onMarkAsDone={handleMarkAsDone}
            onDelete={handleDelete}
            onEdit={handleEditTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;