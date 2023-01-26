import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

const TaskList = (props) => {

    const [isDone, setIsDone] = useState(false);

    function handleCheckbox() {
        setIsDone((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div className="card w-75 mb-3">
            <div className="">
                <div className="form">
                    <ul className="list-group mb-0">
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom-0 rounded-0 mb-2">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." onClick={handleCheckbox} />
                                <div style={{ textDecoration: isDone ? "line-through" : "none" }} className="task">{props.text}</div>
                            </div>
                            <button type="submit" className="btn btn-light ">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    </ul>
                    {/* <input className="form-check-input" style={{ marginTop: "10px" }} type="checkbox" value="" id="flexCheckDefault" />

                    <span style={{ marginLeft: "20px" }}>{props.text}</span>

                    <button type="submit" class="btn btn-light ">
                        <FontAwesomeIcon icon={faTrash} />
                    </button> */}

                </div>
            </div>
        </div>
    );
}

export default TaskList;

