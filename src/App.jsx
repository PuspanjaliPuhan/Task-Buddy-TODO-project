import { useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import ProgressTracker from './components/ProgressTracker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Task Buddy</h1>
        <p>Your friendly Task Manager</p>
        <Taskform />
        <Tasklist />
        <ProgressTracker />
        <button>Clear all Tasks</button>
      </div>
    </>
  )
}

export default App
