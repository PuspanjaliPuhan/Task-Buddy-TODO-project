import { useEffect, useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import ProgressTracker from './components/ProgressTracker'
// import './App.css'
import './Style1.css';

export default function App() {
  // const [count, setCount] = useState(0)

  const [tasks, settasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    settasks([...tasks, task]);  //... is a rest operator
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    settasks(newtask);
  }

  const deleteTask = (index) => {
    settasks(tasks.filter((_, i) => i != index));

  }

  const clearTasks = () => {
    settasks([]);
  }
  return (
    <>
      <div className='App'>
        <header>

        </header>
        <h1 className='title'>Task Buddy</h1>
        <p className='tagline'>Your friendly Task Manager</p>
        <Taskform addTask={addTask} />
        <Tasklist tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask} />
        <ProgressTracker tasks={tasks} />
        {tasks.length > 0 &&
          (<button onClick={clearTasks} className='clear-btn'>Clear all Tasks</button>)}
      </div>
    </>
  )
}

