import React, { useState } from 'react'
import { motion } from 'framer-motion'
import schoolbg from '../assets/SchoolKidsbg.mp4'
import interbg from '../assets/Intermediatepathbg.mp4'
import degreebg from '../assets/Degreebg.mp4'
import pgbg from '../assets/Pgbg.mp4'
import jobsbg from '../assets/Jobsbg.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

function CareerPath() {

    const navigate = useNavigate()

    const textContent = [
        'Complete your schooling with a high percentage and savor every moment of it to the fullest. Enjoy the journey as much as the destination.', 
        'Make the most of your intermediate or polytechnic experience by exploring diverse courses and subjects. Strive for excellence in your studies and relish the opportunity to discover and learn from a variety of disciplines.', 
        'Video3Embrace the diversity of undergraduate courses, explore your academic interests, and excel in your studies. Make the most of this phase by enjoying the learning process and seizing opportunities for personal and intellectual growth.', 
        'Maximize your postgraduate experience by delving into specialized courses, conducting meaningful research, and fostering a deep understanding of your chosen field. Appreciate the journey of advanced studies, and relish the chance to refine your expertise and contribute to the academic community.', 
        'Embark on your professional journey with enthusiasm, choose a job that aligns with your passions and goals, and take pride in standing on your own professional legs. Embrace the challenges, learn continuously, and savor the independence that comes with your chosen career path.'
    ]

    const links = [
        '/GetSchoolsLists',
        '/GetCoursesAfter10',
        '/GetCoursesAfter12',
        '/coursepg',
        '/',
      ]

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const [currentText, setCurrentText] = useState(textContent[0])

    const [currentLink, setCurrentLink] = useState(links[0])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      setCurrentText(textContent[updatedIndexes[0]])
      setCurrentLink(links[updatedIndexes[0]])
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      setCurrentText(textContent[updatedIndexes[0]])
      setCurrentLink(links[updatedIndexes[0]])
      return updatedIndexes;
    });
  };

  const images = [schoolbg, jobsbg, pgbg, degreebg, interbg];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen">
        <div className="container d-flex justify-content-center">
            <img src='src/assets/promotion.png' width='30' height='20'/>
            <h1 style={{color: 'white', fontSize: '30px'}}>EduNavigate</h1>
        </div>
      {images.map((image, index) => (
        <motion.video
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute"}}
          autoPlay
          muted
          loop
        />
      ))}
      <div className="flex flex-row gap-3" style={{marginTop: '10px'}}>
        <button className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 hover:bg-indigo-600" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft}/></button>
        <button className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 hover:bg-indigo-600" onClick={()=> navigate(currentLink)}><img src='src/assets/promotion.png' alt='buttonimage' width='20' height='20'/></button>
        <button className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 hover:bg-indigo-600" onClick={handleNext}><FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
        <h1 style={{color: 'white', fontSize: '22px', marginTop: '20px'}}>{currentText}</h1>
    </div>
  )
}

export default CareerPath
