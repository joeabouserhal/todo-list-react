import { createContext, ReactNode, useState } from 'react'

const TaskContext = createContext<any>(undefined)

export type TaskType = {
  id?: number
  title: string
  body: string
}

const exampleTasks: TaskType[] = [
  {
    title: 'test title',
    body: 'test body',
  },
]

export const TaskProvider: React.FC<any> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>(exampleTasks)
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
