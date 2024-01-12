import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile/Profile'
import RegisterPost from './RegisterPost/Register'
import Login from './RegisterPost/Login'
import Dashboard from './Dashboard/Dashboard'
import { UserContextProvider } from './userContext'

function Routers() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default Routers
