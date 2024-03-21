import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutUs() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide full-screen">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        /*Main*/
        <div className="carousel-item active">
          <img src="src/assets/Aboutslide1.png" className="d-block w-100" alt="..." />
        </div>
        /*Hari Charan*/
        <div className="carousel-item">
          <img src="src/assets/Aboutslide2.png" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <a href="https://t.me/haricharan61108"><FontAwesomeIcon icon={faTelegram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.instagram.com/_hari__charan?igsh=MzRlODBiNWFlZA=="><FontAwesomeIcon icon={faInstagram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.linkedin.com/in/hari-charan-020931253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} className="social-icon mr-3" size='lg'/></a>
          </div>
        </div>
        /*Sri Charan*/
        <div className="carousel-item">
          <img src="src/assets/Aboutslide3.png" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <a href="https://t.me/Chandhu_04"><FontAwesomeIcon icon={faTelegram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.instagram.com/_sricharan.reddy_?igsh=MzRlODBiNWFlZA=="><FontAwesomeIcon icon={faInstagram} className="social-icon mr-3" size='lg'/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="social-icon mr-3" size='lg'/></a>
          </div>
        </div>
        /*Karthik*/
        <div className="carousel-item">
          <img src="src/assets/Aboutslide4.png" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <a href="https://t.me/RK_Karthik14"><FontAwesomeIcon icon={faTelegram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.instagram.com/karthik_krithik14?igsh=MzNlNGNkZWQ4Mg=="><FontAwesomeIcon icon={faInstagram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.linkedin.com/in/karthik-m-34989428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} className="social-icon mr-3" size='lg'/></a>
          </div>
        </div>
        /*Sai Ram*/
        <div className="carousel-item">
          <img src="src/assets/Aboutslide5.png" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <a href="https://t.me/sairam461"><FontAwesomeIcon icon={faTelegram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.instagram.com/sairam.mekala?igsh=OGQ5ZDc2ODk2ZA=="><FontAwesomeIcon icon={faInstagram} className="social-icon mr-3" size='lg'/></a>
            <a href="https://www.linkedin.com/in/sai-ram-mekala-a8ba5228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} className="social-icon mr-3" size='lg'/></a>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
