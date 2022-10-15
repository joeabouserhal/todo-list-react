import { createContext, useEffect, useState } from 'react'

const TaskContext = createContext<any>(undefined)

export type TaskType = {
  id?: number
  title: string
  body: string
}

export const TaskProvider: React.FC<any> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const getTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data: TaskType[] = await res.json()

    setTasks(data)
  }

  const addTask = async (newTask: TaskType) => {
    // send task to server
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    // update state
    setTasks([data, ...tasks]);
  }

  useEffect(() => {
    getTasks()
  },[])

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
