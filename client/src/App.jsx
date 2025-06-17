import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptianSignup from './pages/CaptianSignup'
import CaptianLogin from './pages/CaptianLogin'
import { useContext } from 'react'
import UserContext, { UserContextData } from './context/UserContext'
import Start from './pages/Start'
import UserProtectedWraper from './pages/UserProtectedWraper'
import UserLogut from './pages/UserLogut'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWraper from './pages/CaptainProtectedWraper'

function App() {

  const ans = useContext(UserContextData)
  // console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptianLogin />} />
        <Route path="/captian-signup" element={<CaptianSignup />} />
        <Route path="/home" element={<UserProtectedWraper><Home /></UserProtectedWraper>} />
        <Route path='/user/logout' element={<UserProtectedWraper><UserLogut /></UserProtectedWraper>} />
        <Route path="/captain-Home" element={<CaptainProtectedWraper> <CaptainHome /></CaptainProtectedWraper>} />


      </Routes>
    </div>
  )
}

export default App
