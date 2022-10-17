import { createContext, useEffect, useState } from 'react'

const TaskContext = createContext<any>(undefined)

export type TaskType = {
  id: number
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

  // delete a task
  const deleteTask = async (id:number) => {
    if (window.confirm("Are you sure you want to delete")) {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      // we filter our array to keep items that don't match the id that
      // we want to delete
      // or we filter  through only the items with ids different than
      // the id that we want to delete
      setTasks(tasks.filter((item) => item.id != id));
    }
  };

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, addTask, setDone, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
