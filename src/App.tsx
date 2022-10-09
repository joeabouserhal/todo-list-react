import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/layout/Home'
import About from './components/layout/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='px-16 pt-4'>
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
    </div>
  )
}

export default App
