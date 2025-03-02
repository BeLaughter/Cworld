import { useState } from "react";
import "./Faqc.css";
const Faqc = () => {
  // State for each FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle a specific FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "What service does CWorld offer?",
      answer: "We offer web development, UI/UX design, and branding services.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "  Absolutly! CWorld collaborations with clients globally providing digital design solution regardless of location",
    },
    {
      question: " What is the typical project timeline?",
      answer:
        "Yes! We offer ongoing support and maintenance for all our projects.",
    },
    {
      question: " How do i start a project with CWorld?",
      answer:
        "Yes! We offer ongoing support and maintenance for all our projects.",
    },
  ];

  return (
    <div className="faqc">
      <div className="flex-container">
        <div className="flex-item1a">
          <h1
            className="title"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            FAQ
          </h1>
          <p>
            At Cworld, Our strength lies in the passion and expertise of our
            team. We’re a group of innovative thinkers, design enthusiasts, and
            problem.
          </p>
          <a href="#" className="btn btn-warning">
            Ask a Question
          </a>
        </div>
        <div className="flex-item2a">
          <div
            className="faq-input"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {faqs.map((faq, index) => (
              <div key={index}>
                <button onClick={() => toggleFAQ(index)} className="faq-btn">
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p
                    data-aos="zoom-in-top"
                    data-aos-duration="2000"
                    className="faq-p"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqc;
