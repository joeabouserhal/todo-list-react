import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'
import { TaskType } from '../types/TaskType'
import ReadMore from './ReadMore'

interface Props {
  task: TaskType
}

const Task: React.FC<Props> = (props: Props) => {
  
  const { setDone, deleteTask } = useContext(TaskContext)
  const [checked, setChecked] = useState(props.task.done)

  const handleCheck = () => {
    setChecked(!checked)
    setDone(props.task.id, !checked)
  }

  const handleDeleteTask = () => {
    // TODO: fix confirm firing twice
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(props.task.id)
    }
  }

  return (
    <div className="container bg-gray-200 rounded-lg p-4 shadow-lg flex justify-between">
      <div className="my-auto">
        <button
          className="btn btn-sm btn-circle btn-error"
          onClick={handleDeleteTask}
        >
          X
        </button>
      </div>
      <div className="w-[100%] px-2">
        <h4 className="font-semibold text-lg">{props.task.title}</h4>
        <ReadMore description={props.task.description} />
      </div>
      <div className="my-auto">
        <input
          type={'checkbox'}
          className="checkbox overflow-clip"
          checked={checked}
          onChange={handleCheck}
        />
      </div>
    </div>
  )
}

export default Task
