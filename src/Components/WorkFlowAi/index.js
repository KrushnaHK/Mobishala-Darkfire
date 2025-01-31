import './index.css';

const services = [
  {
    id: 1,
    title: 'Streamline Product Efficiency',
    image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737891648/676e0d35f2a322f226af5099_Service1_lqjvkj.jpg',
  },
  {
    id: 2,
    title: 'Income Insights',
    image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737891674/676e0d3536af860a0fbfadb5_Service2_xruisy.jpg',
  },
  {
    id: 3,
    title: 'Events Scheduling',
    image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737891718/676e1582e23b1b9336620641_Service4_po6dyl.jpg',
    
  },
  {
    id: 4,
    title: 'Analyze Visitor Behavior',
    image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737891725/676e15eb27d86c36f391610d_Service3_v8stlp.jpg',
  },
];

const WorkFlowAi = () => {
  return (
    <div className="service-page">
      <h1 className="service-page-heading ">
        Streamline Your Workflow With Our AI Platform
      </h1>
      <div className="service-grid-container">
        {/* First Row */}
        <div className="service-row">
          <div className="service-card big-card">
            <img src={services[0].image} alt={services[0].title} className="big-card-image"/>
            <div>
            <p>{services[0].title}</p>
            </div>
          </div>
          <div className="service-card small-card">
            <img src={services[1].image} alt={services[1].title} className="small-card-image" />
            <p>{services[1].title}</p>
          </div>
        </div>
        {/* Second Row */}
        <div className="service-row">
          <div className="service-card small-card">
            <img src={services[2].image} alt={services[2].title} className="small-card-image"/>
            <p>{services[2].title}</p>
          </div>
          <div className="service-card big-card">
            <img src={services[3].image} alt={services[3].title}  className="big-card-image"/>
            <p>{services[3].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowAi;