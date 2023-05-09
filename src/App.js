import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task1", status: true},
    { id: 2, title: "Task2", status: true}
  ])
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  return (
    <div className="App container">
      <h2>To-do App</h2>
      <br></br>
      <br></br>

      {toDo && toDo.length > 0 ? '' : 'No task to display'}
      {toDo && toDo
        .map( (task, index) => {
          return (
            <div key={index}>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
