import React, { useState } from 'react'
import ScheduleWebinar from './ScheduleWebinar'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Admin() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [loggedIn, setLoggedIn] = useState()

    const onInputChange =(e)=>{
        if(e.target.id === 'name'){
            setName(e.target.value)
        }
        else if(e.target.id === 'password'){
            setPassword(e.target.value)
        }

    }

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: false,
        draggable: false,
        theme: 'light'
    }

  const submitWebinar =async(e)=>{
    e.preventDefault()
    if(name === 'Karthik1404'  && password === 'HareKrishna'){
        setLoggedIn(true)
    }
    else{
        toast.error('Invalid Credentials', toastOptions)
    }
  }

  return (
    <div>
        {loggedIn ? <ScheduleWebinar/> :(
            <>
            <div className='w-full h-screen flex items-start'>
                <div className="relative w-1/2 h-full felx flex-col">
                    <img src='src/assets/admin_image.jpg' className='w-full h-full object-cover'/>
                </div>

                <div className="w-1/2 h-full bg-[#f5f5ff5] flex flex-col p-20">

                    <h1 className='display-6 text-[#060606] font-semibold'>EduNavigate</h1>

                    <div className="w-full flex flex-col">

                    <div className='w-full flex flex-col mb-10'>
                        <h3 className='text-2xl font-semibold mb-4'>Welcome</h3>
                        <p className='text-sm mb-2' style={{color: 'grey'}}>Please Enter the Login Details</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <form onSubmit={submitWebinar}>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' id='name' className='form-control' onChange={onInputChange} required/>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' id='password' className='form-control' onChange={onInputChange} required/>
                        <button type='submit' className='btn btn-primary w-full my-2' style={{color: 'black'}}>Login</button>
                        </form>
                    </div>

                    </div>

                    <div className="w-full">

                    </div>
                </div>
            </div>
            <ToastContainer/>
            </>
        )}
    </div>
  )
}

export default Admin
