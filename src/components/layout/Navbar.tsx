import React from 'react'
import { GoTasklist } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar flex justify-between px-16 shadow-md">
      <div>
        <GoTasklist size="5vh" className="mr-5" />
        <h1 className="text-lg">To-Do List</h1>
      </div>
      <div>
        <Link to={'/'}>
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link to={'/about'}>
          <button className="btn btn-ghost">About</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
