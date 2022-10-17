import React, { useState, useContext, useRef } from 'react'
import { HiPlus } from 'react-icons/hi'
import TaskContext from './../context/TaskContext'

interface Props {
  isOpen: boolean
}

const TaskModal: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)
  const {addTask} = useContext(TaskContext)

  const titleRef = useRef<any>()
  const bodyRef = useRef<any>()

  const handleAddTask = (e:any) => {
    e.preventDefault()
    if (titleRef.current.value) {
      addTask({
        title: titleRef.current.value,
        description: bodyRef.current.value,
        done: false
      })
      titleRef.current.value = ""
      bodyRef.current.value = ""
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className={`${isOpen ? 'visible' : 'hidden'}`}>
        <div
          className="fixed z-[2] top-0 left-0 flex h-screen w-screen backdrop-blur-md"
          // onClick={toggleModal}
        >
          <div className="z-[1] modal-box justify-center self-center bg-gray-200 mx-auto p-5 w-[80vh] lg:w-[50vw] h-max">
            <button
              className="relative btn btn-circle float-right text-xl font-light"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <h2 className="text-xl font-semibold p-4">Add a Task</h2>
            <form className="flex flex-col gap-5" onSubmit={handleAddTask}>
              <input className="input" placeholder='Title' ref={titleRef}></input>
              <textarea className="textarea" rows={3} placeholder='Description' ref={bodyRef}></textarea>
              <div className='flex justify-end gap-x-3'>
                <button className="btn btn-ghost" type='reset' onClick={()=>setIsOpen(false)}>Cancel</button>
                <button className="btn btn-accent" type='submit'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        className="btn btn-accent btn-lg fixed right-5 bottom-5 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <HiPlus size="5vh" />
      </button>
    </>
  )
}

export default TaskModal
