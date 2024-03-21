import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webinaritem from './Webinaritem'

export default function LiveWebinars() {
  const API_URL = "http://localhost:5038/";

  const [webinars, setWebinars] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const refreshWebinars = async () => {
      try {
        const response = await fetch(`${API_URL}api/mernproject/get-webinars`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const currentDate = new Date();

        const upCommingWebinars = data.filter(webinar=>{
          const webinarDate = new Date(webinar.date)
          return webinarDate >= currentDate
        })
        setWebinars(upCommingWebinars);
        setError('');
      } catch (error) {
        setError('Error fetching data');
        navigate('/404');
      }
    };

    refreshWebinars();
  }, [API_URL, navigate]);

  return (
    <div className="container my-3">
      <div className="container my-3 d-flex justify-content-center">
        <h1 className='display-4 flex flex-content-center'>Live Webinars</h1>
      </div>
      <div className="row">
        {webinars.map((webinar)=>(
          <div className="col-md-4" key={webinar._id}>
            <Webinaritem name={webinar.name} date={webinar.date} time={webinar.time} topic={webinar.topic} imageurl={`src/assets/${webinar.image}`} meetingurl={webinar.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}
