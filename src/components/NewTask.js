import { useState } from "react";
import '../App.css';

function Newtask(props) {

    const [inputText, setInputText] = useState("");

    function handlechange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function submitTask(event) {
        props.onAdd(inputText);
        setInputText("");
        event.preventDefault();
    }

    return (

        <form className="col row-cols-lg-auto g-3 d-flex justify-content-center align-items-center mb-4 pb-2">
            <div className="form-group m-2">
                {/* <label htmlFor="taskInput">Please input your new task below</label> */}
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    placeholder="Enter a task here"
                    value={inputText}
                    onChange={handlechange}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary" onClick={submitTask}>
                    Save task
                </button>
            </div>
        </form>
    );
}

export default Newtask;