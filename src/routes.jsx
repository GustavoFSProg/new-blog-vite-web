import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile/Profile'
import RegisterPost from './RegisterPost/Register'
import Login from './RegisterPost/Login'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegisterPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
