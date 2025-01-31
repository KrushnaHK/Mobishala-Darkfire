import './index.css'
const Bannersection = () => (
  <div className='banner-conatiner'>
    <div className='banner-section-bg-container'>
      <h1 className='banner-heading'>
        Revolutionize Your Business with Advanced AI-Powered SaaS Solutions
      </h1>
      <p className='banner-paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className='banner-button-conatiner'>
        <button className='get-started-button'>Get Started</button>
        <button className='learn-more-button'>Learn More</button>
      </div>
    </div>
    <img  
      src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737884947/banner_image_yckpmi.jpg" 
      className='banner-image'         
      alt='banner-image'
    />
  </div>
)

export default Bannersection