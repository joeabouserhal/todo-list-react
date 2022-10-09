import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

interface Props {
  isOpen: boolean
}

const TaskModal: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)

  return (
    <>
      <div className={`${isOpen ? 'visible' : 'hidden'}`}>
        <div
          className="fixed z-[2] top-0 left-0 flex h-screen w-screen backdrop-blur-md"
          // onClick={toggleModal}
        >
          <div className="z-[1] modal-box justify-center self-center bg-gray-200 mx-auto p-5 w-[50vw] h-[50vh]">
            <button
              className="relative btn btn-circle float-right text-xl font-light"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed right-5 bottom-5 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <HiPlus size="5vh" />
      </button>
    </>
  )
}

export default TaskModal
