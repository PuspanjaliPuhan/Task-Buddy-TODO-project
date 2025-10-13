import { useEffect, useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import ProgressTracker from './components/ProgressTracker'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [tasks, settasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })
  const addTask = (task) => {
    settasks([...tasks, task]);  //... is rest operator
  }

  return (
    <>
      <div>
        <h1>Task Buddy</h1>
        <p>Your friendly Task Manager</p>
        <Taskform addTask={addTask} />
        <Tasklist tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask} />
        <ProgressTracker />
        <button>Clear all Tasks</button>
      </div>
    </>
  )
}

export default App
