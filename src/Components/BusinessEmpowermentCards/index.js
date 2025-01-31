import "./index.css";

const cards = [
  {
    id: 1,
    title: "Galileo",
    description: "Why Businesses Rely on Galileo for Exceptional Results",
    imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737966827/6766cba00aae0d7555cd76e2_Galileo_xvl6xy.png",
  },
  {
    id: 2,
    title: "Capsule",
    description: "Transforming Visions into Reality with Capsule",
    imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737966832/6766cba00aae0d7555cd76b6_Capsule_ctjiwy.png",
  },
  {
    id: 3,
    title: "Polymath",
    description: "Partnering with Polymath to Achieve Unparalleled Growth",
    imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737966837/6766cba00aae0d7555cd76ca_Polymath_grlhnf.png",
  },
];

const BusinessEmpowermentCards = () => {
  return (
    <div className="empowerment-card-grid-container">
      <h1 className="empowerment-heading">Empowering Businesses to Succeed Beyond Limits</h1>
      <div className="empowerment-card-grid">
        {cards.map((card) => (
          <div className="empowerment-card" key={card.id}>
            <img src={card.imageUrl} alt={card.title} className="empowerment-card-image-h" />
            <p className="empowerment-card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default BusinessEmpowermentCards;