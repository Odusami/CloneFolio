import './StudioManager.scss';
const studioManager = {
  id: "studio manager",
  title: "CRM: Online booking, projects, mini-sessions, contracts, invoicing, forms, bio link",
  icon: <GoCheckCircleFill className="pricingIcon" />,
  gallery1: {
    header: "FREE",
    amount: "$0",
    amountType: "/mo",
    paymentType: "no charge",

    content: [
      {
        id: " StudioManger1",
        size: "Unlimited",
        title: "Project",
      },
      {
        id: " StudioManger1",
        size: "Unlimited",
        title: "Contacts",
      },
      {
        id: " StudioManger1",
        size: "5",
        title: "Documents",
        subTitle: "Invoices, contracts & more",
      },
      {
        id: " StudioManger1",
        size: "5",
        title: "Forms",
      },
      {
        id: " StudioManger1",
        size: "10",
        title: "Bookings",
      },
      {
        id: " StudioManger1",
        size: "5",
        title: "Client Portals",
      },
      {
        id: " StudioManger1",
        title: "Custom Domain",
      },
    ],
  },
  gallery2: {
    header: "Lite",
    amount: "$12",
    amountType: "/mo",
    paymentType: (
        <>
          billed annually <br/> or <span className="fw-bold colorBlack-300">$10</span> month to month
        </>
      ),

    content: [
      {
          id: " StudioManger2",
          size: "Unlimited",
        title: "Project",
      },
      {
        id: " StudioManger2",
        size: "Unlimited",
        title: "Contacts",
      },
      {
        id: " StudioManger2",
        size: "Unlimited",
        title: "Documents",
        subTitle: "Invoices, contracts & more",
      },
      {
        id: " StudioManger2",
        size: "Unlimited",
        title: "Forms",
      },
      {
        id: " StudioManger2",
        size: "10",
        title: "Bookings",
      },
      {
        id: " StudioManger2",
        size: "5",
        title: "Client Portals",
      },
      {
        id: " StudioManger2",
        title: "Custom Domain",
      },
      {
        id: " StudioManger2",
        title: "Linkable Templates",
      },
    ],
  },
  gallery3: {
    header: "Pro",
    amount: "$15",
    amountType: "/mo",
    paymentType: (
        <>
          billed annually <br/> or <span className="fw-bold colorBlack-300">$20</span> month to month
        </>
      ),

    content: [
      {
          id: " StudioManger3",
          size: "Unlimited",
        title: "Project",
      },
      {
        id: " StudioManger3",
        size: "Unlimited",
        title: "Contacts",
      },
      {
        id: " StudioManger3",
        size: "Unlimited",
        title: "Documents",
        subTitle: "Invoices, contracts & more",
      },
      {
        id: " StudioManger3",
        size: "Unlimited",
        title: "Forms",
      },
      {
        id: " StudioManger3",
        size: "Unlimited",
        title: "Bookings",
      },
      {
        id: " StudioManger3",
        size: "Unlimited",
        title: "Client Portals",
      },
      {
        id: " StudioManger3",
        title: "Custom Domain",
      },
      {
        id: " StudioManger3",
        title: "Linkable Templates",
      },
    ],
  },
}
const StudioManager = () => {
  return (
    <>
          <div className="container">
                    <h4 className="text-center py-4 colorBlack-300 fst-italic">{studioManager.title}</h4>
                <div className="row justify-content-center">
                     {/* Payment1 plan */}
                  <div className="col-lg col-8 col-sm-6 col-md-4 colBorder p-0 pb-4">
                    <div className="py-3 mb-2 text-center headerBorder">
                      <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                        {studioManager.gallery1.header}
                      </h4>
                    </div>
                    <div className="text-center px-3">
                      <div className="vstack justify-content-between amountGroup">
                        <div>
                          <div className="hstack justify-content-center">
                            <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                              {studioManager.gallery1.amount}{" "}
                            </h2>
                            <span className=" vb">
                              {studioManager.gallery1.amountType}
                            </span>
                          </div>
                          <p className="colorBlack-500">
                            {studioManager.gallery1.paymentType}
                          </p>
                        </div>
                        <button className="priceBtn">Get Started</button>
                      </div>
                    </div>
                    <div className="vstack gap-2 mt-4 px-3">
                      {studioManager.gallery1.content.map((content, index) => (
                        <div key={`${content.id}-${index}`} className="d-flex">
                          <p className="me-2">{studioManager.icon}</p>
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
                        {studioManager.gallery2.header}
                      </h4>
                    </div>
                    <div className="text-center px-3">
                      <div className="vstack justify-content-between amountGroup">
                        <div>
                          <div className="hstack justify-content-center">
                            <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                              {studioManager.gallery2.amount}{" "}
                            </h2>
                            <span className=" vb">
                              {studioManager.gallery2.amountType}
                            </span>
                          </div>
                          <p className="colorBlack-500">
                            {studioManager.gallery2.paymentType}
                          </p>
                        </div>
                        <button className="priceBtn">Get Started</button>
                      </div>
                    </div>
                    <div className="vstack gap-2 mt-4 px-3">
                      {studioManager.gallery2.content.map((content, index) => (
                        <div key={`${content.id}-${index}`} className="d-flex">
                          <p className="me-2">{studioManager.icon}</p>
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
                        {studioManager.gallery3.header}
                      </h4>
                    </div>
                    <div className="text-center px-3">
                      <div className="vstack justify-content-between amountGroup">
                        <div>
                          <div className="hstack justify-content-center">
                            <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                              {studioManager.gallery3.amount}{" "}
                            </h2>
                            <span className=" vb">
                              {studioManager.gallery3.amountType}
                            </span>
                          </div>
                          <p className="colorBlack-500">
                            {studioManager.gallery3.paymentType}
                          </p>
                        </div>
                        <button className="priceBtn">Get Started</button>
                      </div>
                    </div>
                    <div className="vstack gap-2 mt-4 px-3">
                      {studioManager.gallery3.content.map((content, index) => (
                        <div key={`${content.id}-${index}`} className="d-flex">
                          <p className="me-2">{studioManager.icon}</p>
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
  )
}

export default StudioManager