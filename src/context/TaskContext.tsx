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

  useEffect(() => {
    getTasks()
  },[])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
