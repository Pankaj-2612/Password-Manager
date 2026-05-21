import { useState } from 'react'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('passopUser')
    return saved ? JSON.parse(saved) : null
  })

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    localStorage.setItem('passopUser', JSON.stringify(userData))
    navigate('/')
  }

  const handleSignOut = () => {
    setUser(null)
    localStorage.removeItem('passopUser')
    navigate('/login')
  }

  const switchToLogin = () => {
    navigate('/login')
  }

  const switchToSignUp = () => {
    navigate('/signup')
  }

  return (
    <>
      <Navbar user={user} onSignOut={handleSignOut} />

      <Routes>
        <Route
          path='/'
          element={
            user
              ? <Manager user={user} />
              : <Navigate to='/signup' replace />
          }
        />

        <Route
          path='/signup'
          element={
            <div className='min-h-screen flex items-center justify-center bg-slate-100 px-4'>
              <SignUp
                onSuccess={handleAuthSuccess}
                onSwitchToLogin={switchToLogin}
              />
            </div>
          }
        />

        <Route
          path='/login'
          element={
            <div className='min-h-screen flex items-center justify-center bg-slate-100 px-4'>
              <Login
                onSuccess={handleAuthSuccess}
                onSwitchToSignUp={switchToSignUp}
              />
            </div>
          }
        />

        <Route
          path='*'
          element={
            <Navigate
              to={user ? '/' : '/signup'}
              replace
            />
          }
        />
      </Routes>
    </>
  )
}

export default App