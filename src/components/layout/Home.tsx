import { useContext } from 'react'
import TaskContext, { TaskType } from '../../context/TaskContext'
import Task from '../Task'
import TaskModal from '../TaskModal'

const Home: React.FC = () => {
  const { tasks } = useContext(TaskContext)
  // console.log(tasks)
  return (
    <div className='mb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task}/>
      ))}
      <TaskModal isOpen={false}/>
    </div>
  )
}

export default Home
