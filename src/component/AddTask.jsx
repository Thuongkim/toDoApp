import React from 'react';
const AddTask = ({ newTask, setNewTask, addTask }) => {
    return (
        <div className="row">
          <div className="col">
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button onClick={addTask} className="btn btn-success mb-3">Add Task</button>
          </div>
        </div>
    )
}
export default AddTask;