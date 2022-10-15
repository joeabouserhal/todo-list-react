import React from 'react'
import { GoTasklist, GoHome, GoInfo } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar h-[10vh] flex justify-between px-4 lg:px-16 shadow-md">
      <div>
        <GoTasklist size="5vh" className="mr-5" />
        <h1 className="text-lg">To-Do List</h1>
      </div>
      <div className="gap-2">
        <Link to={'/'}>
          <button className="btn btn-ghost capitalize gap-2">
            <GoHome size="1.5rem" />
            Home
          </button>
        </Link>
        <Link to={'/about'}>
          <button className="btn btn-ghost capitalize gap-2">
            <GoInfo size="1.5rem"/>
            About
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
