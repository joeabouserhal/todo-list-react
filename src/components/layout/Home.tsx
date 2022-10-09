import { useContext } from 'react'
import { HiPlus } from 'react-icons/hi'

import TaskContext, { TaskType } from '../../context/TaskContext'
import Task from '../Task'

const Home: React.FC = () => {
  const { tasks } = useContext(TaskContext)
  console.log(tasks)
  return (
    <div>
      {tasks.map((task: TaskType) => (
        <Task key={null} title={task.title} body={task.body}/>
      ))}
      <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed right-5 bottom-5 rounded-full">
        <HiPlus size="5vh" />
      </button>
    </div>
  )
}

export default Home
