import { useState } from "react";
import './App.css';
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {

  const [taskInput, setTaskInput] = useState("");
  const [addNewTaskMode, setAddNewTaskMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

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

  return (
    <div className="container main-container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 id="logo">To-do App</h1>
          <h2>
            You have{" "}
            <span>
              1
            </span>{" "}
            task pending
          </h2>
        </div>
        <div className="col-12 text-center m-2">
          <button
            className="btn btn-secondary btn-lg"
            onClick={handleNewTask}
          >
            Add task
          </button>
        </div>

        {addNewTaskMode && <NewTask
          onInput={handleUserInput}
          onSave={handleSaveTask}
        />}

        {count > 0 && !addNewTaskMode &&
          <TaskList
            tasks={tasks}
            onMarkAsDone={handleMarkAsDone}
          />
        }

      </div>
    </div>
  );
}

export default App;
