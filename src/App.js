import './App.css';
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  return (
    <div className="container">
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
          >
            Add task
          </button>
        </div>
        <NewTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
