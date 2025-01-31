import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const images = [
  "https://res.cloudinary.com/djifdyfkd/image/upload/v1737900333/676bbacf20f18c880f270751_Frame_1_tv87t0.jpg",
  "https://res.cloudinary.com/djifdyfkd/image/upload/v1737900336/676bbaced654a32ec176aaf1_Frame_2_qmlztk.jpg",
  "https://res.cloudinary.com/djifdyfkd/image/upload/v1737900341/676bbace558ab1768e099d6a_Frame_3_q5rqr8.jpg",
];

const solutionData = [
  {
    title: "Build Smarter, Scale Faster",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat",
  },
  {
    title: "Seamless Integration",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat",
  },
  {
    title: "Designed to Empower Your Vision",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat",
  },
];

const SaaSsolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLineClick = (index) => {
    setActiveIndex(index);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const solutions = (eachData, index) => {
    return (
      <div
        key={index}
        className={`solution-card ${activeIndex === index ? "active" : ""}`}
        onClick={() => handleLineClick(index)}
      >
        <h1 className="solution-heading">{eachData.title}</h1>
        <p className="solution-para">{eachData.text}</p>
      </div>
    );
  };

  return (
    <section className="saas-solutions">
      <h1 className="saas-title">
        Transform Your Business With Intuitive SaaS Solutions
      </h1>
      <p className="saas-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="container">
        <div className="solution-container">

          <div className="image-container">
            <img
              src={images[activeIndex]}
              alt={images[activeIndex]}
              className="solutions-image"
            />
            {activeIndex === 1 && (
              <button className="video-button" onClick={openModal}>
                <FontAwesomeIcon icon={faPlay} />
              </button>
            )}
        </div>
            

          <div className="solutions">
            {solutionData.map((eachData, index) => solutions(eachData, index))}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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
    </section>
  );
};

export default SaaSsolutions;