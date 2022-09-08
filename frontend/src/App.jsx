import './styles/App.scss'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import All from './pages/All/All'
import Manage from './pages/Manage/Manage'
import New from './pages/New/New'

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/new" element={<New />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
