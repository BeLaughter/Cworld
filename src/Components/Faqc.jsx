import React from "react";
import { useState } from "react";
import "./Faqc.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Faqc = () => {
  const [open, setOpen] = useState(false);
  const toggleFAQ = () => {
    setOpen(!open);
  };

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
          <div className="faq-input">
            <button onClick={toggleFAQ} className="faq-btn">
              What service does CWorld offer?
            </button>
            {open && (
              <p className="faq-p">
                We offer web development, UI/UX design, and branding services.
              </p>
            )}
          </div>
          <div className="faq-input">
            <button onClick={toggleFAQ} className="faq-btn">
              Do you work with international clients?
            </button>
            {open && (
              <p className="faq-p">
                Absolutly! CWorld collaborations with clients globally,
                providing digital design solution regardless of location
              </p>
            )}
          </div>
          <div className="faq-input">
            <button onClick={toggleFAQ} className="faq-btn">
              What is the typical project timeline?
            </button>
            {open && (
              <p className="faq-p">
                We offer web development, UI/UX design, and branding services.
              </p>
            )}
          </div>
          <div className="faq-input">
            <button onClick={toggleFAQ} className="faq-btn">
              How do i start a project with CWorld?
            </button>
            {open && (
              <p className="faq-p">
                We offer web development, UI/UX design, and branding services.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqc;
