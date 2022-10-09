import React from 'react'

interface Task {
  id?: number
  title: string
  body: string
}

const Task: React.FC<Task> = (props: Task) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default Task
