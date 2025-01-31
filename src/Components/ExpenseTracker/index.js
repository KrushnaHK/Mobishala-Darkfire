
import "./index.css";

const ExpenseTracker = () => {
  const earningsImage =
    "https://res.cloudinary.com/djifdyfkd/image/upload/v1737954654/676bbacee478bf337a33523e_Earning_m2t9sx.jpg";
  const plandayimage ='https://res.cloudinary.com/djifdyfkd/image/upload/v1737961146/676bbbfd40f58439895c93ec_Calender_yca8ep.jpg';

  return (
    <div className="expenses-dayplan-container">
        <div className="expense-tracker-container">
          <div className="expense-tracker-grid">
            {/* Left Section */}
            <div className="left-section">
              <h1 className="heading">Track, Manage, and Optimize Expenses Easily</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare.
              </p>
              <ul className="list">
                {[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ].map((text, index) => (
                  <li key={index} className="list-item">
                    <span className="icon">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="expenses-card">
              <img src={earningsImage} alt="Earnings Progress" className="expenses-image" />
            </div>
          </div>
        </div>


        <div className="expense-tracker-container">
          <div className="expense-tracker-grid">
            {/* Left Section */}
            <div className="expenses-card">
              <img src={plandayimage} alt="Earnings Progress" className="expenses-image" />
            </div>

            {/* Right Section */}
            <div className="left-section">
              <h1 className="heading">Plan, Organize, and Streamline Your Day</h1>
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <ul className="list">
                {[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ].map((text, index) => (
                  <li key={index} className="list-item">
                    <span className="icon">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ExpenseTracker;