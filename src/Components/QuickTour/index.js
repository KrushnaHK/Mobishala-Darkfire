import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './index.css'

const QuickTour = () =>{
  const [isModalOpen, setModalOpen] = useState(false);
  
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  return(
    <div className='quicktour-conatiner'>
        <div className='quicktour-banner-section-bg-container'>
          <h1 className='quicktour-banner-heading'>
            Take a Quick Tour: See How The Process Works
          </h1>
          <p className='quicktour-banner-paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.

          </p>
          <div className='quicktour-banner-button-conatiner'>
            <button className='get-started-button'>Sign Up</button>
            <button className='learn-more-button'>Contact</button>
          </div>
        </div>
        <div className="quicktour-image-container">
          <img
            src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737884947/banner_image_yckpmi.jpg"
            alt="Banner"
            className="banner-image"
          />
          <button className="video-button" onClick={openModal}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} 
            >
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
              <iframe
                src="https://www.youtube.com/embed/setu9Ir1miY"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
  )
}

export default QuickTour