import '../App.css';

function Newtask({ onInput, onSave }) {

    return (

        <form className='input-form'>
            <div className="form-group m-2">
                <label htmlFor="taskInput">Please input your new task below</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    aria-describedby="newTaskInput"
                    onChange={e => onInput(e)}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSave}>
                Save task
            </button>
        </form>
    );
}

export default Newtask;