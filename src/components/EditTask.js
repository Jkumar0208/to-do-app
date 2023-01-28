import '../App.css';

const EditTask = ({ onInput, onSaveEdit, targetTask }) => {
    return (
        <form className='input-form'>
            <div className="form-group m-2">
                <label htmlFor="taskInput">Please change your task below</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    placeholder={targetTask.description}
                    aria-describedby="editTaskInput"
                    onChange={e => onInput(e)}
                />
                <small id="editTaskInput" className="form-text text-muted text-center">
                    Edit your task
                </small>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSaveEdit}>
                Save task
            </button>
        </form>
    );
};

export default EditTask;
