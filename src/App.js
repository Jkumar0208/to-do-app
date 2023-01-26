import { useState } from "react";
import './App.css';
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {

  const [input, setInput] = useState([]);

  function addItem(inputText) {
    setInput(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setInput((prevTasks) => {
      return prevTasks.filter((item, index) => {
        return index !== id;
      });
    });
  }

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

        </div>
        <NewTask onAdd={addItem} />
        {input.map((todoItem, index) => {
          return (
            <TaskList
              key={index}
              id={index}
              text={todoItem}
              onDelete={deleteItem}
            />
          );
        })}

      </div>
    </div>
  );
}

export default App;
