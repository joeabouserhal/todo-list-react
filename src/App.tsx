import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/layout/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" />
          <Route path="/notfound" />
          {/* the path "/*" means every route that isn't found
            will be redirected to the not found page
            Same as 404 not found page */}
          <Route path="/*" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
