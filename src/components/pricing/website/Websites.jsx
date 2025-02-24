import './Websites.scss'
import { GoCheckCircleFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";

const websites = {
    id: "websites",
    title:
      "Websites for photographers.",
    icon: <GoCheckCircleFill className="pricingIcon" />,
    gallery1: {
      header: "FREE",
      amount: "$0",
      amountType: "/mo",
      paymentType: "no charge",
  
      content: [
        {
          id: " Websites1",
          size: "5",
          title: "Pages",
        },
        {
          id: " Websites1",
          size: "100",
          title: "Photos",
        },
        {
          id: " Websites1",
          title: "SSL/TLS Security",
        },
        {
          id: " Websites1",
          title: "Basic Visitor Analytics",
        },
        {
          id: " Websites1",
          title: " Use Your Logo",
        },
        {
          id: " Websites1",
          title: " 1 Blog, 5 Articles",
        },
        
      ],
    },
    gallery2: {
      header: "Pro",
      amount: "$10",
      amountType: "/mo",
      paymentType: (
        <>
          billed annually <br /> or{" "}
          <span className="fw-bold colorBlack-300">$14</span> month to month
        </>
      ),
  
      content: [
        {
          id: " Websites2",
          size: "Unlimited",
          title: "Pages",
        },
        {
            id: " Websites2",
            size: "500",
            title: "Photos",
          },
        {
          id: " Websites2",
          title: "SSL/TLS Security",
        },
        {
          id: " Websites2",
          title: "Basic Visitor Analytics",
        },
        {
          id: " Websites2",
          title: " Use Your Logo",
        },
        {
          id: " Websites2",
          title: " 1 Blog, Unlimited Articles",
        },
        {
          id: " Websites2",
          title: "Custom Domain",
          icon: <FaCircleInfo  className='infoIcon'/>,
        },
        {
            id: " Websites2",
            title: "Remove Lightfolio Branding",
          },
        
      ],
    },
    gallery3: {
      header: "Premium",
      amount: "$16",
      amountType: "/mo",
      paymentType: (
        <>
          billed annually <br /> or{" "}
          <span className="fw-bold colorBlack-300">$20</span> month to month
        </>
      ),
  
      content: [
        {
          id: " Websites3",
          size: "Unlimited",
          title: "Pages",
        },
        {
            id: " Websites3",
            size: "Unlimited",
            title: "Photos",
          },
        {
          id: " Websites3",
          title: "SSL/TLS Security",
        },
        {
          id: " Websites3",
          title: "Basic Visitor Analytics",
        },
        {
          id: " Websites3",
          title: " Use Your Logo",
        },
        {
          id: " Websites3",
          title: " 1 Blog, Unlimited Articles",
        },
        {
          id: " Websites2",
          title: "Custom Domain",
          icon: <FaCircleInfo  className='infoIcon'/>,
        },
        {
            id: " Websites3",
            title: "Remove Lightfolio Branding",
          },
        {
            id: " Websites3",
            title: "Custom Code",
          },
        
      ],
    },
}
const Websites = () => {
  return (
    <>
        <div className="container">
        <h4 className="text-center py-4 colorBlack-300 fst-italic">
          {websites.title}
        </h4>
        <div className="row justify-content-center">
          {/* Payment1 plan */}
          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {websites.gallery1.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {websites.gallery1.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {websites.gallery1.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {websites.gallery1.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {websites.gallery1.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{websites.icon}</p>
                  <p>
                    {content.size && (
                      <span className="fw-bold border-bottom border-2 border-dark me-1">
                        {content.size}
                      </span>
                    )}

                    {content.title}

                    <span className="d-block colorBlack-600 mt-1 paymentSubtitle">
                      {content.subTitle}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment2 plan */}

          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colMdBorderRight p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {websites.gallery2.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {websites.gallery2.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {websites.gallery2.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {websites.gallery2.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {websites.gallery2.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{websites.icon}</p>
                  <p>
                    {content.size && (
                      <span className="fw-bold border-bottom border-2 border-dark me-1">
                        {content.size}
                      </span>
                    )}

                    {content.title}

                    <span className="d-block colorBlack-600 mt-1 paymentSubtitle">
                      {content.subTitle}
                    </span>
                    
                  </p>
                  {content.icon && (
                        <p className='ms-2'> {content.icon}</p>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment3 plan */}

          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colBorderRight colLgBorderRight colMdBorderRight removeMdBt p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {websites.gallery3.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {websites.gallery3.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {websites.gallery3.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {websites.gallery3.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {websites.gallery3.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{websites.icon}</p>
                  <p>
                    {content.size && (
                      <span className="fw-bold border-bottom border-2 border-dark me-1">
                        {content.size}
                      </span>
                    )}

                    {content.title}

                    <span className="d-block colorBlack-600 mt-1 paymentSubtitle">
                      {content.subTitle}
                    </span>
                  </p>
                  {content.icon && (
                        <p className='ms-2'> {content.icon}</p>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Websites