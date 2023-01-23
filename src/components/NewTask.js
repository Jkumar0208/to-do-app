

const Newtask = () => {
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <div className="form-group m-2">
                <label htmlFor="taskInput">Please input your new task below</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    aria-describedby="newTaskInput"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Save task
            </button>
        </form>
    );
}

export default Newtask;