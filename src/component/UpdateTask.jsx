import React from 'react';
const UpdateTask = ({ updateTask, refactorTask, setUpdateTask, editTask }) => {
    return (
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" value={updateTask ? updateTask.title : ''} onChange={(e) => editTask(e.target.value)} />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-success mb-3" onClick={() => refactorTask(updateTask.id)}>Update Task</button>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-warning mb-3" onClick={() => setUpdateTask('')}>Cancel</button>
          </div>
        </div>
    )
}
export default UpdateTask;