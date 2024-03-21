import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { animationStart, reveal } from './animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const API_URL = 'http://localhost:5038/'

    const navigate = useNavigate();
    const [internships, setInternships] = useState([])

    const refreshSchools = async ()=> {
        try {
          const response = await fetch(`${API_URL}api/mernproject/GetInternships`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setInternships(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        refreshSchools()
    }, [])

    const handleSiteClick =(site)=>{
        window.open(site, '_blank')
    }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:animationStart}}>

        <motion.div variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{ease:"easeIn", type:'tween', staggerChildren:0.1, duration:0.5, delayChildren:animationStart+0.5}} className='w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100'>
            <motion.div variants={reveal}>
                <div className="flex items-center gap-5px">
                    <FontAwesomeIcon icon={faRoute} size='2x'/>
                    <span style={{fontWeight:'bold', fontSize:'20px'}}>EduNavigate</span>
                </div>
            </motion.div>
            <div className='flex gap-20px items-center <md:hidden'>
            
                <motion.span variants={reveal} className='cursor-pointer' onClick={()=>handleSiteClick('/livewebinars')}>live webinars.</motion.span>
                <motion.span variants={reveal} className='cursor-pointer' onClick={()=>handleSiteClick('/exams')}>exams.</motion.span>
                <motion.span variants={reveal} className='cursor-pointer' onClick={()=>handleSiteClick('/careerpath')}>career.</motion.span>
                <motion.span variants={reveal} className='cursor-pointer' onClick={()=>handleSiteClick('/about-us')}>about us.</motion.span>
                <motion.span variants={reveal} className='cursor-pointer'>
                    <li className="nav-item dropdown" style={{listStyle: 'none'}}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            courses.
                        </a>
                        <ul className="dropdown-menu" style={{listStyle: 'none'}}>
                            <li><a className="dropdown-item" onClick={()=>handleSiteClick('/GetCoursesAfter10')} style={{cursor: 'pointer'}}>After 10<sup>th</sup></a></li>
                            <li><a className="dropdown-item" onClick={()=>handleSiteClick('/GetCoursesAfter12')} style={{cursor: 'pointer'}}>After 10+2</a></li>
                            <li><a className="dropdown-item" onClick={()=>handleSiteClick('/coursepg')} style={{cursor: 'pointer'}}>After UG</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><button onClick={()=>handleSiteClick('https://ncert.nic.in/textbook.php')} className='dropdown-item' style={{cursor: 'pointer'}}>e-books.</button></li>
                            <li><button onClick={()=>handleSiteClick('https://pages.razorpay.com/stores/st_Nl8oYwweQKy77O')} className='dropdown-item' style={{cursor: 'pointer'}}>order books.</button></li>
                        </ul>
                    </li>
                </motion.span>
            </div>
            <motion.span variants={reveal} className='cursor-pointer'>
                <li className='nav-item dropdown' style={{listStyle: 'none'}}>
                    <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>internships.</a>
                    <ul className='dropdown-menu' style={{listStyle: 'none'}}>
                        {internships.map((internship)=>(
                            <li key={internship._id}>
                                <button onClick={()=>handleSiteClick(internship.site)} className='dropdown-item' style={{cursor: 'pointer'}}>{internship.name}</button>
                            </li>
                        ))}
                    </ul>
                </li>
            </motion.span>
        </motion.div>

    </motion.div>
  )
}
