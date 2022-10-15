import { createContext, useEffect, useState } from 'react'

const TaskContext = createContext<any>(undefined)

export type TaskType = {
  id?: number
  title: string
  description: string
  done: boolean
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
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
    const data = await response.json()
    // update state
    setTasks([data, ...tasks])
  }

  const setDone = async (id: number, done: boolean) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: done }),
    })
    const data = await response.json()
    // update state
    setTasks(
      tasks.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, addTask, setDone }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
