import React, { useState } from "react";
import "./index.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-question" onClick={toggleFAQ}>
        <span>{question}</span>
        <button className="faq-toggle">{isOpen ? "×" : "+"}</button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FaqItem;