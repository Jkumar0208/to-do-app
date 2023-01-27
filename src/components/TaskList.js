import '../App.css';

const TaskList = ({ tasks }) => {
    console.log("props", tasks);

    const compare = (a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (b.createdAt > a.createdAt) return 1;
        return 0;
    };

    return (
        <table className="table m-2">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Done</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks.sort(compare).map((task, i) => {
                    return (
                        <tr key={`${task.description} ${i}`}>
                            <th scope='row'>{i + 1}</th>
                            <td>
                                {task.description}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-success btn-sm"
                                >
                                    Done
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-warning btn-sm"
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TaskList;

