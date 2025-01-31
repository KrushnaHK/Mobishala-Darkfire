
import "./index.css";

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/djifdyfkd/image/upload/v1737973043/6766cba00aae0d7555cd76a2_rebase_ye9ama.png",
      title: "Efficient Workflow Automation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/djifdyfkd/image/upload/v1737973052/6766cba00aae0d7555cd7689_Description_tco7nn.png",
      title: "Data-Driven Decision Making",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/djifdyfkd/image/upload/v1737973057/6766cba00aae0d7555cd7675_Support_dfpubj.png",
      title: "Automated Customer Engagement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/djifdyfkd/image/upload/v1737973063/6766cba00aae0d7555cd765e_Tactic_cafyeu.png",
      title: "Streamlined Project Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies fermentum metus ac lacinia",
    },
  ];

  return (
    <div className="use-cases-container">
      <h2 className='use-cases-container-heading'>Practical Use Cases That Drive Results</h2>
      <div className="row">
        {useCases.slice(0, 2).map((useCase) => (
          <div key={useCase.id} className="usecases-card">
            <img src={useCase.imageUrl} alt={useCase.title} className="card-image" />
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
      <div className="row">
        {useCases.slice(2).map((useCase) => (
          <div key={useCase.id} className="usecases-card">
            <img src={useCase.imageUrl} alt={useCase.title} className="card-image" />
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;