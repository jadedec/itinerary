import './styles/App.scss'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'





const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/new" element={<New />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/all" element={<All />} /> */}
            
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
