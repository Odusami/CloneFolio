import StudioManager from "../studioManager/StudioManager";
import "./Bundles.scss";
import { FaFile } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";
const bundles = {
  id: "bundles",
  title: "Access to every feature at the best rates.",
  icon: <GoCheckCircleFill className="pricingIcon" />,
  clientGallery: {
    icon: <HiPhoto className="pricingIcon"/>,
    header: "CLIENT GALLERIES",
    content: [
      {
        id: " GalleryContent00",
        size: "No",
        title: "Commission",
      },

      {
        id: " GalleryContent00",
        title: "Proofing",
      },
      {
        id: " GalleryContent00",
        title: "Online Sales",
      },
      {
        id: " GalleryContent00",
        title: "Use Your Logo",
      },
      {
        id: " GalleryContent00",
        title: "Custom Domain",
      },
      {
        id: " GalleryContent00",
        title: " Remove Lightfolio Branding",
      },
    ],
    content1: [
      {
        id: " GalleryContent01",
        size: "30 GB",
        title: "Storage",
        subTitle: "(About 6,000 Images)",
      },
      {
        id: " GalleryContent01",
        size: "3 GB",
        title: "Video Storage",
        subTitle: "(About 20 Minutes)",
      },
    ],
    content2: [
      {
        id: " GalleryContent02",
        size: "1000 GB",
        title: "Storage",
        subTitle: "(About 200,000 Images)",
      },
      {
        id: " GalleryContent02",
        size: "30 GB",
        title: "Video Storage",
        subTitle: "(About 3 Hours)",
      },
    ],
    content3: [
      {
        id: " GalleryContent03",
        size: "Unlimited",
        title: "Storage",
        subTitle: "(Unlimited Images)",
      },
      {
        id: " GalleryContent03",
        size: "60 GB",
        title: "Video Storage",
        subTitle: "(About 6 Hours)",
      },
    ],
  },
  studioManager: {
    icon: <FaFile className="pricingIcon"/>,
    header: "STUDIO MANAGER(CRM)",
    content: [
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Project",
      },
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Contacts",
      },
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Documents",
        subTitle: "Invoices, contracts & more",
      },
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Forms",
      },
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Bookings",
      },
      {
        id: " StudioManger00",
        size: "Unlimited",
        title: "Client Portals",
      },
      {
        id: " StudioManger00",
        title: "Custom Domain",
      },
    ],
    content2: [
      {
        id: " StudioManger02",
        title: "Linkable Templates",
      },
      {
        id: " StudioManger02",
        size: "+2",
        title: "Team Members",
      },
    ],
    content3: [
      {
        id: " StudioManger03",
        title: "Linkable Templates",
      },
      {
        id: " StudioManger03",
        size: "+10",
        title: "Team Members",
      },
    ],
  },
  websites: {
    icon: <CiGlobe className="pricingIcon"/>,
    header: "WEBSITES",
    support: {
      size: "Priority Support",
    },
    content: [
      {
        id: " Websites00",
        size: "Unlimited",
        title: "Pages",
      },
      {
        id: " Websites00",
        size: "Unlimited",
        title: "Photos",
      },
      {
        id: " Websites00",
        title: "SSL/TLS Security",
      },
      {
        id: " Websites00",
        title: "Basic Visitor Analytics",
      },
      {
        id: " Websites00",
        title: " Use Your Logo",
      },
      {
        id: " Websites00",
        title: " 5 Blog, Unlimited Articles",
      },
      {
        id: " Websites00",
        title: "Custom Domain",
        icon: <FaCircleInfo className="infoIcon" />,
      },
      {
        id: " Websites00",
        title: "Remove Lightfolio Branding",
      },
      {
        id: " Websites00",
        title: "Custom Code",
      },
    ],
    content1: [
      {
        id: " Websites01",
        size: "Unlimited",
        title: "Pages",
      },
      {
        id: " Websites01",
        size: "500",
        title: "Photos",
      },
      {
        id: " Websites01",
        title: "SSL/TLS Security",
      },
      {
        id: " Websites01",
        title: "Basic Visitor Analytics",
      },
      {
        id: " Websites01",
        title: " Use Your Logo",
      },
      {
        id: " Websites01",
        title: " 1 Blog, Unlimited Articles",
      },
      {
        id: " Websites01",
        title: "Custom Domain",
        icon: <FaCircleInfo className="infoIcon" />,
      },
      {
        id: " Websites01",
        title: "Remove Lightfolio Branding",
      },
    ],
  },

  gallery1: {
    header: "Starter",
    amount: "$20",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br /> or{" "}
        <span className="fw-bold colorBlack-300">$27</span> month to month
      </>
    ),
  },
  gallery2: {
    header: "Pro",
    amount: "$28",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br /> or{" "}
        <span className="fw-bold colorBlack-300">$38</span> month to month
      </>
    ),
  },
  gallery3: {
    header: "Premium",
    amount: "$48",
    amountType: "/mo",
    paymentType: (
      <>
        billed annually <br /> or{" "}
        <span className="fw-bold colorBlack-300">$58</span> month to month
      </>
    ),
  },
};
const Bundles = () => {
  return <>
  
  <div className="container">
        <h4 className="text-center py-4 colorBlack-300 fst-italic">
          {bundles.title}
        </h4>
        <div className="row justify-content-center">
          {/* Payment1 plan */}
          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {bundles.gallery1.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {bundles.gallery1.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {bundles.gallery1.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {bundles.gallery1.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            {/* Client Gallery */}
            <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.clientGallery.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.clientGallery.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {bundles.clientGallery.content1.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {bundles.clientGallery.content.map((content, index)=>(
                   <div key={`${content.id}-${index}`} className="d-flex">
                   <p className="me-2">{bundles.icon}</p>
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

              {/* Studio Manager */}
              <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.studioManager.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.studioManager.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3 studioBundleH">
              {bundles.studioManager.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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

                {/*  Websites */}
                <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.websites.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.websites.header}</p>
            </div>
            
            <div className="vstack gap-2 mt-4 px-3 websiteBundleH">
              {bundles.websites.content1.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {/*  */}
            </div>
            <div className="hstack mt-4 mt-sm-0 px-3">
            <p className="me-2">{bundles.icon}</p>
            <p className="fw-bold border-bottom border-2 border-dark">{bundles.websites.support.size}</p>
            </div>
           
          </div>

                   {/* Payment2 plan */}
          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colMdBorderRight p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {bundles.gallery2.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {bundles.gallery2.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {bundles.gallery2.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {bundles.gallery2.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            {/* Client Gallery */}
            <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.clientGallery.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.clientGallery.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {bundles.clientGallery.content2.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {bundles.clientGallery.content.map((content, index)=>(
                   <div key={`${content.id}-${index}`} className="d-flex">
                   <p className="me-2">{bundles.icon}</p>
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

              {/* Studio Manager */}
              <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.studioManager.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.studioManager.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3 studioBundleH">
              {bundles.studioManager.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {bundles.studioManager.content2.map((content, index)=>(
                  <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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

                {/*  Websites */}
                <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.websites.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.websites.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3 websiteBundleH">
              {bundles.websites.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex ">
                  <p className="me-2">{bundles.icon}</p>
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
              {/*  */}
            </div>
            <div className="hstack mt-4 mt-sm-0 px-3">
            <p className="me-2">{bundles.icon}</p>
            <p className="fw-bold border-bottom border-2 border-dark">{bundles.websites.support.size}</p>
            </div>
          </div>

                  {/* Payment3 plan */}
          <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colBorderRight colLgBorderRight colMdBorderRight removeMdBt p-0 pb-4">
            <div className="py-3 mb-2 text-center headerBorder">
              <h4 className="fw-bold fs-4 m-0 colorBlack-300">
                {bundles.gallery3.header}
              </h4>
            </div>
            <div className="text-center px-3">
              <div className="vstack justify-content-between amountGroup">
                <div>
                  <div className="hstack justify-content-center">
                    <h2 className="font1 fw-bold m-0 fs-1  colorBlack-300">
                      {bundles.gallery3.amount}{" "}
                    </h2>
                    <span className=" vb">
                      {bundles.gallery3.amountType}
                    </span>
                  </div>
                  <p className="colorBlack-500">
                    {bundles.gallery3.paymentType}
                  </p>
                </div>
                <button className="priceBtn">Get Started</button>
              </div>
            </div>
            {/* Client Gallery */}
            <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.clientGallery.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.clientGallery.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3">
              {bundles.clientGallery.content3.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {bundles.clientGallery.content.map((content, index)=>(
                   <div key={`${content.id}-${index}`} className="d-flex">
                   <p className="me-2">{bundles.icon}</p>
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

              {/* Studio Manager */}
              <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.studioManager.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.studioManager.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3 studioBundleH">
              {bundles.studioManager.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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
              {bundles.studioManager.content3.map((content, index)=>(
                  <div key={`${content.id}-${index}`} className="d-flex">
                  <p className="me-2">{bundles.icon}</p>
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

                {/*  Websites */}
                <div className="hstack justify-content-center pt-4">
            <p className="me-2">{bundles.websites.icon}</p>
            <p className="fw-medium bundleTitle">{bundles.websites.header}</p>
            </div>
            <div className="vstack gap-2 mt-4 px-3 websiteBundleH">
              {bundles.websites.content.map((content, index) => (
                <div key={`${content.id}-${index}`} className="d-flex ">
                  <p className="me-2">{bundles.icon}</p>
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
              {/*  */}
            </div>
            <div className="hstack  px-3 mt-4 mt-sm-0">
            <p className="me-2">{bundles.icon}</p>
            <p className="fw-bold border-bottom border-2 border-dark">{bundles.websites.support.size}</p>
            </div>
          </div>     















          {/* Payment2 plan */}

          {/* <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colMdBorderRight p-0 pb-4">
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
          </div> */}

          {/* Payment3 plan */}

          {/* <div className="col-lg-3 col-8 col-sm-6 col-md-4 colBorder colBorderRight colLgBorderRight colMdBorderRight removeMdBt p-0 pb-4">
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
          </div> */}
        </div>
      </div>
  
  </>;
};

export default Bundles;
