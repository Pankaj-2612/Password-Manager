import React, { useState } from 'react'

const SignUp = ({ onSuccess, onSwitchToLogin }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // request to backend to signup
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      // response from backend
      const data = await response.json()
      if (!response.ok) {
        alert(data.error || 'Signup failed')
        return
      }
      onSuccess(data)
    } catch (error) {
      console.error(error)
      alert('Signup failed')
    }
  }

  return (
    <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700'
            placeholder='Enter your name'
            required
          />
        </div>
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
        <button type='submit' className='w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-200'>Sign Up</button>
      </form>
      <p className='text-sm text-center mt-4 text-gray-600'>
        Already have an account?{' '}
        <button type='button' onClick={onSwitchToLogin} className='text-green-700 font-semibold underline'>Login</button>
      </p>
    </div>
  )
}

export default SignUp
