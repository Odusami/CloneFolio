import { div, title } from "framer-motion/client";
import "./ClientGallery.scss";
import { GoCheckCircleFill } from "react-icons/go";

const clientGallery = {
  id: "client gallery",
  title: "Proof, share, deliver and sell photos online.",
  icon: <GoCheckCircleFill className="pricingIcon" />,
  gallery1: {
    header: "FREE",
    amount: "$0",
    amountType: "/mo",
    paymentType: "no charge",

    content: [
      {
        id: " GalleryContent1",
        size: "1 GB",
        title: "Storage",
        subTitle: "(About 200 Images)",
      },
      {
        id: " GalleryContent1",
        title: "15% Commission",
      },
      {
        id: " GalleryContent1",
        title: "Proofing",
      },
      {
        id: " GalleryContent1",
        title: "Online Sales",
      },
      {
        id: " GalleryContent1",
        title: "Use Your Logo",
      },
    ],
  },
  gallery2: {
    header: "Lite",
    amount: "$7",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br/> or <span className="fw-bold colorBlack-300">$10</span> month to month
      </>
    ),

    content: [
      {
        id: " GalleryContent2",
        size: "30 GB",
        title: "Storage",
        subTitle: "(About 6000 Images)",
      },
      {
        id: " GalleryContent2",
        size: "3 GB",
        title: "Video Storage",
        subTitle: "(About 20 Minutes)",
      },
      {
        id: " GalleryContent2",
        size: "No",
        title: "Video Storage",
      },

      {
        id: " GalleryContent2",
        title: "Proofing",
      },
      {
        id: " GalleryContent2",
        title: "Online Sales",
      },
      {
        id: " GalleryContent2",
        title: "Use Your Logo",
      },
      {
        id: " GalleryContent2",
        title: "Custom Domain",
      },
    ],
  },
  gallery3: {
    header: "Starter",
    amount: "$12",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br/> or <span className="fw-bold colorBlack-300">$18</span> month to month
      </>
    ),

    content: [
      {
        id: " GalleryContent3",
        size: "100 GB",
        title: "Storage",
        subTitle: "(About 20,000 Images)",
      },
      {
        id: " GalleryContent3",
        size: "10 GB",
        title: "Video Storage",
        subTitle: "(About 1 Hour)",
      },
      {
        id: " GalleryContent3",
        size: "No",
        title: "Commission",
      },

      {
        id: " GalleryContent3",
        title: "Proofing",
      },
      {
        id: " GalleryContent3",
        title: "Online Sales",
      },
      {
        id: " GalleryContent3",
        title: "Use Your Logo",
      },
      {
        id: " GalleryContent3",
        title: "Custom Domain",
      },
      {
        id: " GalleryContent3",
        title: " Remove Lightfolio Branding",
      },
    ],
  },
  gallery4: {
    header: "Pro",
    amount: "$20",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br/> or <span className="fw-bold colorBlack-300">$28</span> month to month
      </>
    ),

    content: [
      {
        id: " GalleryContent4",
        size: "1000 GB",
        title: "Storage",
        subTitle: "(About 200,000 Images)",
      },
      {
        id: " GalleryContent4",
        size: "30 GB",
        title: "Video Storage",
        subTitle: "(About 3 Hours)",
      },
      {
        id: " GalleryContent4",
        size: "No",
        title: "Commission",
      },

      {
        id: " GalleryContent4",
        title: "Proofing",
      },
      {
        id: " GalleryContent4",
        title: "Online Sales",
      },
      {
        id: " GalleryContent4",
        title: "Use Your Logo",
      },
      {
        id: " GalleryContent4",
        title: "Custom Domain",
      },
      {
        id: " GalleryContent4",
        title: " Remove Lightfolio Branding",
      },
      {
        id: " GalleryContent4",
        title: " Priority Support",
      },
    ],
  },
  gallery5: {
    header: "Premium",
    amount: "$40",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br/> or <span className="fw-bold colorBlack-300">$50</span> month to month
      </>
    ),

    content: [
      {
        id: " GalleryContent5",
        size: "Unlimited",
        title: "Storage",
        subTitle: "(Unlimited Images)",
      },
      {
        id: " GalleryContent5",
        size: "30 GB",
        title: "Video Storage",
        subTitle: "(About 3 Hours)",
      },
      {
        id: " GalleryContent5",
        size: "No",
        title: "Commission",
      },

      {
        id: " GalleryContent5",
        title: "Proofing",
      },
      {
        id: " GalleryContent5",
        title: "Online Sales",
      },
      {
        id: " GalleryContent5",
        title: "Use Your Logo",
      },
      {
        id: " GalleryContent5",
        title: "Custom Domain",
      },
      {
        id: " GalleryContent5",
        title: " Remove Lightfolio Branding",
      },
      {
        id: " GalleryContent5",
        title: " Priority Support",
      },
    ],
  },
};
const ClientGallery = () => {
  return (
    <>
      <div className="container">
            <h4 className="text-center py-4 colorBlack-300 fst-italic">{clientGallery.title}</h4>
        <div className="row justify-content-center">
             {/* Payment1 plan */}
          <div className="col-lg col-8 col-sm-6 col-md-4 colBorder p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {clientGallery.gallery1.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {clientGallery.gallery1.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {clientGallery.gallery1.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {clientGallery.gallery1.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {clientGallery.gallery1.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{clientGallery.icon}</p>
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

              <div className="col-lg col-8 col-sm-6 col-md-4 colBorder colMdBorderRight p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {clientGallery.gallery2.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {clientGallery.gallery2.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {clientGallery.gallery2.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {clientGallery.gallery2.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {clientGallery.gallery2.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{clientGallery.icon}</p>
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


              {/* Payment3 plan */}

              <div className="col-lg col-8 col-sm-6 col-md-4 colBorder colLgBorderRight removeMdBt p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {clientGallery.gallery3.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {clientGallery.gallery3.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {clientGallery.gallery3.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {clientGallery.gallery3.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {clientGallery.gallery3.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{clientGallery.icon}</p>
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

              {/* Payment4 plan */}


              <div className="col-lg col-8 col-sm-6 col-md-4 colBorder colMdBorderRight removelgBt p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {clientGallery.gallery4.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {clientGallery.gallery4.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {clientGallery.gallery4.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {clientGallery.gallery4.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {clientGallery.gallery4.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{clientGallery.icon}</p>
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

                {/* Payment5 plan */}

                <div className="col-lg col-8 col-sm-6 col-md-4 colBorder p-0 pb-4 colBorderRight removelgBt">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {clientGallery.gallery5.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1 colorBlack-300">
                      {clientGallery.gallery5.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {clientGallery.gallery5.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {clientGallery.gallery5.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {clientGallery.gallery5.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{clientGallery.icon}</p>
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








         
        </div>
      </div>
    </>
  );
};

export default ClientGallery;
