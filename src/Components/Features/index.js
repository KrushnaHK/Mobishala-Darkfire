
import "./index.css";

const features = [
  {
    title: "Localization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896424/6766cba00aae0d7555cd7573_Language_melbte.png",
  },
  {
    title: "Monitoring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896481/6766cba00aae0d7555cd75bd_Monitoring_of4ek2.png",
  },
  {
    title: "Data Backup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896446/6766cba00aae0d7555cd759b_Cloud_uvwzkh.png",
  },
  {
    title: "Data Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896474/6766cba00aae0d7555cd75df_Lock_grekfw.png",
  },
  {
    title: "Scalability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896434/6766cba00aae0d7555cd7605_Zoom_fcax3k.png",
  },
  {
    title: "Integration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia.",
    icon: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737896424/6766cba00aae0d7555cd7573_Language_melbte.png",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">
        Get Better Result With Stunning Features
      </h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;