const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
      <div>
        <h1 className="text-lg font-sans">To-Do List</h1>
      </div>
      <div>
        <button className="btn btn-ghost font-sans">Home</button>
        <button className="btn btn-ghost font-sans">About</button>
      </div>
    </nav>
  )
}

export default Navbar
