import React from 'react'

const About: React.FC = () => {
  return (
    <div className='justify-center h-full pt-[30vh]'>
      <h1 className='text-6xl pb-2'>To-Do List</h1>
      <h3 className='text-lg pb-10'>Developed by <span className='font-bold text-xl'>Joe Abou Serhal</span></h3>
      <p>
        I just developed this app as a way to learn typescript and practice using state
      </p>
    </div>
  )
}

export default About