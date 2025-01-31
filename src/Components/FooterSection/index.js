import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './index.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h1 className="newsletter-text-heading">Join our newsletter</h1>
            <p className="newsletter-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="newsletter-subscribe-container">
            <div className="newsletter-subscribe">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
            <p className="privacy-text">
              By subscribing you agree to with our <a href className="privacy-text-anchor">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>


      <div className="footer-container">
        <div className="footer-logo">
          <img 
            src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737873225/logo_header_euqm28.png" 
            alt="DarkFire Logo" 
            className="logo-image"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Change logs</li>
              <li>Log In</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Blogs</li>
              <li>Customer</li>
              <li className="hiring">Careers <span>Hiring</span></li>
              <li>Contact</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Utility Pages</h3>
            <ul>
              <li>Style Guide</li>
              <li>License</li>
              <li>Instructions</li>
              <li>ChangeLogs</li>
              <li>Password Protected</li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="darkfir-big-name">
        <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737989593/676eb0a275878aed7dfdf846_Logo_Footer-p-1600_r31ccd.png" className="darkfire-big-image" alt="arkfire-big-image"/>
      </div>

      <div>
        <hr className="horizontal-line"/>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text-conatiner">
          <p className="footer-bottom-text">
            Made by FactorTheme. Powered By Webflow
          </p>
        </div>
        <div className='underline-text-conatiner'>
          <a href className="underline-text">Privacy Policy</a>
          <a  href className="underline-text">Terms of Service</a>
        </div>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;