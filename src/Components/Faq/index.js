
import "./index.css";
import FaqItem from "../FaqItem";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "How can your platform benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      id: 2,
      question: "How can your platform benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      id: 3,
      question: "How can your platform benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      id: 4,
      question: "How can your platform benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      id: 5,
      question: "How can your platform benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      <p className="faq-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      {faqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}

      <h1 className="still-have-heading">Still have questions?</h1>
      <p className="still-have-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="contact-all-button">Contact</button>
    </div>
  );
};

export default Faq;