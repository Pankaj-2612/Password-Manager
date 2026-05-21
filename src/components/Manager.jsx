import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Manager = ({ user }) => {
  const [form, setForm] = useState({ site: '', username: '', password: '' })
  const [passwordarray, setPasswordArray] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const iconBase = `${import.meta.env.BASE_URL}icons`

  const getpasswords = async () => {
    if (!user) {
      setPasswordArray([])
      return
    }

    // const req = await fetch(`http://localhost:3000/passwords?userId=${user._id}`)
    const req = await fetch(`https://password-manager-jno6.onrender.com/passwords?userId=${user._id}`)
    const Passwords = await req.json()

    if (Array.isArray(Passwords) && Passwords.length > 0) {
      setPasswordArray(Passwords)
    } else {
      setPasswordArray([])
    }
  }

  useEffect(() => {
    getpasswords()
  }, [user])

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const savepassword = async () => {
    if (form.site && form.username && form.password) {
      const newpassword = {
        userId: user._id,
        site: form.site,
        username: form.username,
        password: form.password
      }

      // const response = await fetch('http://localhost:3000/passwords', {
      const response = await fetch('https://password-manager-jno6.onrender.com/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newpassword)
      })

      const savedPassword = await response.json()
      if (!response.ok) {
        toast.error(savedPassword.error || 'Unable to save password', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        return
      }

      setPasswordArray((prev) => [...prev, savedPassword])
      setForm({ site: '', username: '', password: '' })
      toast.success('Password saved successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    } else {
      toast.error('Please fill in all fields', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }

  const copysite = (e) => {
    const site = e.target.parentElement.textContent.trim()
    navigator.clipboard.writeText(site).then(() => {
      toast.success('Site URL copied to clipboard!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    })
  }

  const editpassword = async (e) => {
    const index = e.target.closest('tr').rowIndex - 1
    const passwordToEdit = passwordarray[index]
    if (!passwordToEdit) return

    setForm({
      site: passwordToEdit.site,
      username: passwordToEdit.username,
      password: passwordToEdit.password
    })
    setPasswordArray((prev) => prev.filter((_, i) => i !== index))

    // await fetch(`http://localhost:3000/passwords/${passwordToEdit._id}`, {
    await fetch(`https://password-manager-jno6.onrender.com/passwords/${passwordToEdit._id}`, {
      method: 'DELETE'
    })

    toast.info('Edit your password', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  const deletepassword = async (e) => {
    if (!confirm('Are you sure you want to delete this password?')) {
      return
    }

    const index = e.target.closest('tr').rowIndex - 1
    const passwordToDelete = passwordarray[index]
    if (!passwordToDelete) return

    const updatedpasswordarray = passwordarray.filter((_, i) => i !== index)
    setPasswordArray(updatedpasswordarray)

    // await fetch(`http://localhost:3000/passwords/${passwordToDelete._id}`, {
    await fetch(`https://password-manager-jno6.onrender.com/passwords/${passwordToDelete._id}`, {
      method: 'DELETE'
    })

    toast.success('Password successfully deleted!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={true}
                theme="light"
                style={{ zIndex: 99999 }}
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>


            <div className=" mx-auto px-4 py-3 ">

                <h1 className='text-2xl sm:text-3xl font-bold text-center py-2'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>Manager</span>
                    <span className='text-green-700'>/&gt;</span>
                </h1>
                <p className='text-lg sm:text-2xl text-green-800 text-center py-3'>Securely store and manage your passwords</p>

                <div className='font-bold text-center flex flex-col space-y-4 w-full max-w-3xl mx-auto py-4 px-4 sm:px-0'>

                    <input value={form.site} onChange={handlechange} name="site" type="text" placeholder="Enter Website" className='bg-gray-200 text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-full rounded-xl px-3 py-2 pr-12' />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input value={form.username} onChange={handlechange} name="username" type="text" placeholder="Enter Username" className='bg-gray-200 text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-2/3 rounded-xl px-3 py-2 pr-12' />


                        <div className="relative w-full sm:w-1/3">

                            <input
                                value={form.password}
                                onChange={handlechange}
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Password"
                                className='w-full bg-gray-200 text-gray-700 placeholder:text-gray-500 border border-gray-300 rounded-xl px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />

                            <span
                                className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                                onClick={toggleShowPassword}
                            >
                                <img src={`${iconBase}/${showPassword ? 'eye' : 'openeye'}.svg`} alt={showPassword ? 'Hide password' : 'Show password'} className='w-5 h-5' />
                            </span>

                        </div>


                    </div>

                    <div className="flex items-center justify-center space-x-1 w-full">
                        <div className="flex items-center justify-center space-x-1 bg-green-500 w-full sm:w-1/4 rounded-3xl hover:bg-green-700 cursor-pointer">
                            <button onClick={savepassword} className=' text-black py-2 rounded-xl cursor-pointer w-full sm:w-auto'>
                                Add Password
                            </button>
                        </div>
                    </div>
                </div>
                <div className="passwords mx-auto px-4 py-3 ">
                    <h2 className='font-bold text-2xl px-4 py-4 '>Your Saved Passwords</h2>
                    {passwordarray.length === 0 && <p className=' text-black text-xl font-bold px-4 py-4'>No passwords saved yet !</p>}
                    {passwordarray.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse mt-4 rounded-xl overflow-hidden">
                                <thead className='bg-green-900 text-white text-center '>
                                    <tr>
                                        <th className='my-2'>Site</th>
                                        <th className='my-2'>Username</th>
                                        <th className='my-2'>Password</th>
                                        <th className='my-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-slate-500 text-white text-center'>
                                    {passwordarray.map((item, index) => (
                                        <tr key={item._id} className="border-t">
                                            <td className='my-2'><a href={item.site} target='_blank' rel='noreferrer'>{item.site}</a> <img onClick={copysite} className=' cursor-pointer w-5 h-5 inline-block ml-2' src="/icons/copy.svg" alt="Copy" /></td>
                                            <td className='my-2'>{item.username}</td>
                                            <td className='my-2'> {"•".repeat(item.password.length)}</td>
                                            <td><lord-icon
                                                src="https://cdn.lordicon.com/nwfpiryp.json"
                                                trigger="hover"
                                                onClick={editpassword}
                                                className='cursor-pointer w-8 h-8 mx-auto '
                                            >
                                            </lord-icon>

                                                <lord-icon
                                                    src="https://cdn.lordicon.com/egqwwrlq.json"
                                                    onClick={deletepassword}
                                                    trigger="hover"
                                                    colors="primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef,quaternary:#000000"
                                                    className='cursor-pointer w-8 h-8 mx-auto px-4'>
                                                </lord-icon>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>)
                    }

                </div>
            </div>





        </>
    )
}

export default Manager
