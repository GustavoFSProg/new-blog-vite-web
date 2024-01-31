import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile/Profile'
import RegisterPost from './RegisterPost/Register'
import Login from './RegsiterUserAdmin/Login'
import Dashboard from './Dashboard/Dashboard'
import { UserContextProvider } from './userContext'
import ProfileAdmin from './Profile/ProfileAdmin'
import Posts from './Posts/Posts'
import UpdatePost from './UpdatePost/UpdatePost'
import RegisterUser from './RegsiterUserAdmin/Register'
import ChangePassword from './RegsiterUserAdmin/ChangePassword'
import AreaPosts from './RegisterPost/indexPost'
import IndexAdmin from './RegsiterUserAdmin/indexAdmin'

function Routers() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-admin" element={<ProfileAdmin />} />
          <Route path="/register" element={<AreaPosts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/update-post" element={<UpdatePost />} />
          <Route path="/register-user" element={<IndexAdmin />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default Routers
