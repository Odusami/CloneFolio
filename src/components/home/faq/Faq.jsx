import { div } from "framer-motion/client";
import "./Faq.scss";



 
const Faq = ({faqData}) => {
  return (
    <>
      <div className="accordion" id={faqData.id}>
        {faqData.content.map((content) => (
          <div key={content.id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${content.id} `}
                aria-expanded="true"
                aria-controls={content.id}
              >
                {content.header}
              </button>
            </h2>
            <div
              id={content.id}
              className="accordion-collapse collapse"
              data-bs-parent={`#${faqData.id}`}
            >
              <h5 className="accordion-body colorBlack font1">{content.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
