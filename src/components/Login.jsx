import React, { useState } from 'react'

const Login = ({ onSuccess, onSwitchToSignUp }) => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      // request to backend to login
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      // response from backend
      const data = await response.json()
      if (!response.ok) {
        alert(data.error || 'Login failed')
        return
      }
      onSuccess(data)
    } catch (error) {
      console.error(error)
      alert('Login failed')
    }
  }

  return (
    <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 mb-2' htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700'
            placeholder='Enter your password'
            required
          />
        </div>
        <button type='submit' className='w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-200'>Login</button>
      </form>
      <p className='text-sm text-center mt-4 text-gray-600'>
        Don't have an account?{' '}
        <button type='button' onClick={onSwitchToSignUp} className='text-green-700 font-semibold underline'>Sign up</button>
      </p>
    </div>
  )
}

export default Login
