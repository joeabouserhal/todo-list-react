import React from 'react'

interface Task {
  id?: number
  title: string
  body: string
}

const Task: React.FC<Task> = (props: Task) => {
  return (
    <div className='container bg-gray-200 rounded-lg p-4 shadow-lg shad'>
      <h4 className='font-semibold text-lg'>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default Task
