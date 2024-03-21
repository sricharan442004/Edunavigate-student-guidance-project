import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {

    const navigate = useNavigate()
  return (
    <section className='page_404' style={{padding: '40px 0', background: '#fff', fontFamily: 'Poppins'}}>
        <div className="container my-3">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col text-center" style={{background: 'url("src/assets/404bg.gif")', height: '400px', backgroundPosition: 'center', width: '100%'}}>
                    <h1 className='display-1' style={{fontSize: '80px'}}>404</h1>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className='col text-center'>
                    <h3 className='display-3' style={{fontSize: '80px'}}>Looks Like You're Lost Server</h3>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className='col text-center'>
                    <p>The page you are looking for not available</p>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className='col text-center'>
                    <button type='button' className='btn btn-success' onClick={()=>navigate('/')} style={{color: 'black'}}>Go to home</button>
                </div>
            </div>
        </div>
    </section>
  )
}
