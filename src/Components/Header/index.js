import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import "./index.css";

const Header = () => {
  const [isFeatureHovered, setIsFeatureHovered] = useState(false);
  const [isUseCaseHovered, setIsUseCaseHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737873225/logo_header_euqm28.png"
          className="navbar-logo"
          alt="navbar-logo"
        />
      </div>

      <div className="nav-menu-items">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#pricing" className="nav-link">Pricing</a>

        <div
          className="nav-dropdown"
          onMouseEnter={() => setIsFeatureHovered(true)}
          onMouseLeave={() => setIsFeatureHovered(false)}
        >
          <a href="#features" className="nav-link">
            Features <i className={`fas ${isFeatureHovered ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </a>
          {isFeatureHovered && (
            <div className="dropdown-content">
            <a href="#localization">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896424/6766cba00aae0d7555cd7573_Language_melbte.png" alt="feature option logo"/>
                Localization
              </a>
              <a href="#monitoring">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896481/6766cba00aae0d7555cd75bd_Monitoring_of4ek2.png" alt="feature option logo"/>
                Monitoring
              </a>
              <a href="#data-backup">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896446/6766cba00aae0d7555cd759b_Cloud_uvwzkh.png" alt="feature option logo"/>
                Data Backup
              </a>
              <a href="#data-security">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896474/6766cba00aae0d7555cd75df_Lock_grekfw.png" alt="feature option logo"/>
                Data Security
              </a>
              <a href="#scalability">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896434/6766cba00aae0d7555cd7605_Zoom_fcax3k.png" alt="feature option logo"/>
                Scalability
              </a>
              <a href="#integration">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896441/6766cba00aae0d7555cd7550_Integration_pt7tke.png" alt="feature option logo"/>
                Integration
              </a>
            </div>
          )}
        </div>

        <div
          className="nav-dropdown"
          onMouseEnter={() => setIsUseCaseHovered(true)}
          onMouseLeave={() => setIsUseCaseHovered(false)}
        >
          <a href="#use-cases" className="nav-link">
            Use Cases <i className={`fas ${isUseCaseHovered ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </a>
          {isUseCaseHovered && (
            <div className="dropdown-content">
            <a href="#workflow">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973043/6766cba00aae0d7555cd76a2_rebase_ye9ama.png" alt="use cases logos"/>
                Efficient Workflow Automation</a>
              <a href="#decision-making">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973052/6766cba00aae0d7555cd7689_Description_tco7nn.png" alt="use cases logos"/>
                Data-Driven Decision Making
              </a>
              <a href="#customer-engagement">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973057/6766cba00aae0d7555cd7675_Support_dfpubj.png" alt="use cases logos"/>
                Automated Customer Engagement
              </a>
              <a href="#project-management">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973063/6766cba00aae0d7555cd765e_Tactic_cafyeu.png" alt="use cases logos"/>
                Streamlined Project Management
              </a>
            </div>
          )}
        </div>

        <a href="#blogs" className="nav-link">Blogs</a>
      </div>

      <div className="logout-cart-container">
        <a href="#cart" className="nav-link">Cart <span className="cart-count">0</span></a>
        <button type="button" className="login-button">Login</button>
        <i className="fa-solid fa-bars bars-icon" onClick={toggleMenu}></i>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" className="menu-link">Home</a>
        <a href="#about" className="menu-link">About</a>
        <a href="#pricing" className="menu-link">Pricing</a>

        {/* Features Dropdown */}
        <div className="mobile-dropdown">
          <button className="menu-link dropdown-btn" onClick={() => setIsFeatureHovered(!isFeatureHovered)}>
            Features <i className={`fas ${isFeatureHovered ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </button>
          {isFeatureHovered && (
            <div className="mobile-dropdown-content">
            <a href="#localization">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896424/6766cba00aae0d7555cd7573_Language_melbte.png" alt="feature option logo"/>
                Localization
              </a>
              <a href="#monitoring">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896481/6766cba00aae0d7555cd75bd_Monitoring_of4ek2.png" alt="feature option logo"/>
                Monitoring
              </a>
              <a href="#data-backup">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896446/6766cba00aae0d7555cd759b_Cloud_uvwzkh.png" alt="feature option logo"/>
                Data Backup
              </a>
              <a href="#data-security">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896474/6766cba00aae0d7555cd75df_Lock_grekfw.png" alt="feature option logo"/>
                Data Security
              </a>
              <a href="#scalability">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896434/6766cba00aae0d7555cd7605_Zoom_fcax3k.png" alt="feature option logo"/>
                Scalability
              </a>
              <a href="#integration">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737896441/6766cba00aae0d7555cd7550_Integration_pt7tke.png" alt="feature option logo"/>
                Integration
              </a>
            </div>
          )}
        </div>

        {/* Use Cases Dropdown */}
        <div className="mobile-dropdown">
          <button className="menu-link dropdown-btn" onClick={() => setIsUseCaseHovered(!isUseCaseHovered)}>
            Use Cases <i className={`fas ${isUseCaseHovered ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </button>
          {isUseCaseHovered && (
            <div className="mobile-dropdown-content">
            <a href="#workflow">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973043/6766cba00aae0d7555cd76a2_rebase_ye9ama.png" alt="use cases logos"/>
                Efficient Workflow Automation</a>
              <a href="#decision-making">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973052/6766cba00aae0d7555cd7689_Description_tco7nn.png" alt="use cases logos"/>
                Data-Driven Decision Making
              </a>
              <a href="#customer-engagement">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973057/6766cba00aae0d7555cd7675_Support_dfpubj.png" alt="use cases logos"/>
                Automated Customer Engagement
              </a>
              <a href="#project-management">
                <img src="https://res.cloudinary.com/djifdyfkd/image/upload/v1737973063/6766cba00aae0d7555cd765e_Tactic_cafyeu.png" alt="use cases logos"/>
                Streamlined Project Management
              </a>
            </div>
          )}
        </div>

        <a href="#blogs" className="menu-link">Blogs</a>
        <button className="mobile-login-button">Login</button>
      </div>
    </div>
  );
};

export default Header;
