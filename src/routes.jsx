import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile/Profile'
import RegisterPost from './RegisterPost/Register'
import Login from './RegisterPost/Login'
import Dashboard from './Dashboard/Dashboard'
import { UserContextProvider } from './userContext'
import ProfileAdmin from './Profile/ProfileAdmin'
import Posts from './Posts/Posts'
import UpdatePost from './UpdatePost/UpdatePost'
import RegisterUser from './RegsiterUserAdmin/Register'

function Routers() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-admin" element={<ProfileAdmin />} />
          <Route path="/register" element={<RegisterPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/update-post" element={<UpdatePost />} />
          <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default Routers
