import React, {useContext, useState} from 'react'
import TaskContext, { TaskType } from '../context/TaskContext'
import ReadMore from './ReadMore'

interface Props {
  task:TaskType
}

const Task: React.FC<Props> = (props: Props) => {
  const {setDone} = useContext(TaskContext)
  const [checked, setChecked] = useState(props.task.done)
  const handleCheck = () => {
    setChecked(!checked)
    setDone(props.task.id, !checked)
  }
  return (
    <div className="container bg-gray-200 rounded-lg p-4 shadow-lg flex justify-between">
      <div className="w-[100%]">
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
