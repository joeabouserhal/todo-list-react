import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'
import Home from './components/layout/Home'
import About from './components/layout/About'

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Router>
          <Navbar />
          <div className="min-h-[90vh] px-4 lg:px-16 pt-6 pb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" />
              {/* the path "/*" means every route that isn't found
            will be redirected to the not found page
            Same as 404 not found page */}
              <Route path="/*" />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </div>
  )
}

export default App
