import React from 'react'

interface Task {
  id?: number
  title: string
  body: string
}

const Task: React.FC<Task> = (props: Task) => {
  return (
    <div className="container bg-gray-200 rounded-lg p-4 shadow-lg flex justify-between">
      <div>
        <h4 className="font-semibold text-lg">{props.title}</h4>
        <p className=''>{props.body}</p>
      </div>
      <div className='my-auto'>
        <input type={"checkbox"} className="checkbox overflow-clip"></input>
      </div>
    </div>
  )
}

export default Task
