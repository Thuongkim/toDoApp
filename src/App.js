import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './component/AddTask';
import UpdateTask from './component/UpdateTask';
import ToDo from './component/Todo';

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task1", status: false},
    { id: 2, title: "Task2", status: false}
  ])
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const addTask = () => {
    if (newTask) {
      let toDoLength = toDo.length;
      let newEntry = { id: toDoLength, title: newTask, status: false};
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    setToDo(toDo.filter((item) => item.id !== id))
  }

  const editTask = (newTitle) => {
    setUpdateTask({...updateTask, title : newTitle});
  }

  const refactorTask = (id) => {
    setUpdateTask(toDo.map((item) => {
      if (item.id === id) item.title = updateTask.title;
      return item;
    }))
  }

  const markTaskDone = (id) => {
    setToDo(toDo.map((item) => {
      if (item.id === id) item.status = !item.status;
      return item;
    }))
  }
  return (
    <div className="App container">
      <h2>To-do App</h2>
      <br></br>
      <br></br>

      { updateTask && updateTask.title ? 
        (<UpdateTask
          updateTask={updateTask}
          refactorTask={refactorTask}
          setUpdateTask={setUpdateTask}
          editTask={editTask}
        />) :

        (<AddTask 
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />)
      }

      {toDo && toDo.length > 0 ? '' : 'No task to display'}
      <ToDo 
        toDo={toDo}
        markTaskDone={markTaskDone}
        setUpdateTask={setUpdateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
