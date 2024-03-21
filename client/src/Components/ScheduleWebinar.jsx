import React, { useState } from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ScheduleWebinar() {

  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [topic, setTopic] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [url, setUrl] = useState()

  const onInputChange =(e)=>{
    if(e.target.id === 'image'){
      setImage(e.target.files[0])
    }
    else if(e.target.id === 'name'){
      setName(e.target.value)
    }
    else if(e.target.id === 'topic'){
      setTopic(e.target.value)
    }
    else if(e.target.id === 'date'){
      setDate(e.target.value)
    }
    else if(e.target.id === 'time'){
      setTime(e.target.value)
    }
    else if(e.target.id === 'url'){
      setUrl(e.target.value)
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
    const formData = new FormData()
    formData.append('name', name)
    formData.append('topic', topic)
    formData.append('date', date)
    formData.append('time', time)
    formData.append("image", image)
    formData.append("url", url)

    const url1 = "http://localhost:5038/api/mernproject/upload-webinar"

    try{
      const result = await axios.post(url1 ,formData, {headers: {"Content-Type": "multer/form-data"}} )
      console.log(result.data)
      toast.success("Webinar Scheduled Successfully", toastOptions)
      toast
    }catch(error){
      console.log(error)
      toast.error("Failed to Schedule Webinar", toastOptions)
    }
  }

  return (
    <>
      <div className='w-full h-screen flex items-start'>
        <div className="relative w-1/2 h-full felx flex-col">
          <img src='src/assets/admin_image.jpg' className='w-full h-full object-cover'/>
        </div>

        <div className="w-1/2 h-full bg-[#f5f5ff5] flex flex-col p-20 justify-between">

          <h1 className='display-6 text-[#060606] font-semibold'>EduNavigate</h1>

          <div className="w-full flex flex-col">

            <div className='w-full flex flex-col mb-10'>
              <h3 className='text-2xl font-semibold mb-4'>Upload Webinar</h3>
              <p className='text-sm mb-2' style={{color: 'grey'}}>Welcome! Please Enter the Webinar Details</p>
            </div>

            <div className="w-full flex flex-col">
              <form onSubmit={submitWebinar}>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type='text' id='name' className='form-control' onChange={onInputChange} required/>
                <label htmlFor='topic' className='form-label'>Topic</label>
                <input type='text' id='topic' className='form-control' onChange={onInputChange} required/>
                <label htmlFor='date' className='form-label'>Date</label>
                <input type='date' id='date' className='form-control' onChange={onInputChange} required/>
                <label htmlFor='time' className='form-label'>Time</label>
                <input type='time' id='time' className='form-control' onChange={onInputChange} required/>
                <label htmlFor='image' className='form-label'>Image</label>
                <input type='file' id='image' className='form-control' accept='image/*' onChange={onInputChange} required/>
                <label htmlFor='url' className='form-label'>URL</label>
                <input type='url' id='url' className='form-control' onChange={onInputChange} required/>
                <button type='submit' className='btn btn-primary w-full my-2' style={{color: 'black'}}>Sechedule</button>
              </form>
            </div>

          </div>

          <div className="w-full">

          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  )
}

export default ScheduleWebinar
