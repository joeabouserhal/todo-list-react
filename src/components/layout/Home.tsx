import { useContext } from 'react'
import { HiPlus } from 'react-icons/hi'

import TaskContext, { TaskType } from '../../context/TaskContext'
import Task from '../Task'

const Home: React.FC = () => {
  const { tasks } = useContext(TaskContext)
  // console.log(tasks)
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {tasks.map((task: TaskType) => (
        <Task key={task.id} title={task.title} body={task.body} />
      ))}
      <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed right-5 bottom-5 rounded-full">
        <HiPlus size="5vh" />
      </button>
    </div>
  )
}

export default Home
