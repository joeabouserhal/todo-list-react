import { useState, useContext } from 'react'
import TaskContext, { TaskType } from '../../context/TaskContext'
import Divider from '../Divider'
import Task from '../Task'
import TaskModal from '../TaskModal'

const Home: React.FC = () => {
  const { tasks } = useContext(TaskContext)
  const [showCompleted, setShowCompleted] = useState<boolean>(false)

  return (
    <div className="mb-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tasks
          .filter((item: TaskType) => item.done != true)
          .map((task: TaskType) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
      <div className="py-10w">
        <div
          className="cursor-pointer"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          <Divider>
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
          </Divider>
        </div>
      </div>
      <div
        className={`${
          showCompleted ? `visible` : `hidden`
        } grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {tasks
          .filter((item: TaskType) => item.done != false)
          .map((task: TaskType) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
      <TaskModal isOpen={false} />
    </div>
  )
}

export default Home
