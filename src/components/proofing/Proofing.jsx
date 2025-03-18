import GridTextGroup from "../gridTextGroup/GridTextGroup";
import "./Proofing.scss";
import { CiHeart } from "react-icons/ci";
import ProofingTextGroup from "./proofingTextGroup/ProofingTextGroup";
import { useEffect, useState } from "react";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import GalleryCard from "../galleryRoute/galleries/galleryCard/GalleryCard";
import { FaMapMarkerAlt, FaMapMarkedAlt } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { FaLock, FaCloudDownloadAlt, FaSearchPlus } from "react-icons/fa";
import { TbCircleLetterCFilled, TbWorldCog } from "react-icons/tb";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { GiWorld, GiRobotGrab } from "react-icons/gi";
import { FaFolderOpen } from "react-icons/fa6";
const Proofing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/public/folio images/proofing-wedding.jpg",
    "/public/folio images/proofing-editorial.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="proofingSection mb-0 ">
        <div className="container">
          <div className="row rowMdAlign">
            <div className="col-12 col-md-6 col-lg-5 mb-5 mb-md-0">
              <GridTextGroup
                subHeader={"Lightfolio Client Galleries"}
                header={"Photo proofing software for photographers"}
                title={
                  "Create beautiful online galleries and empower clients with an easy-to-use proofing system."
                }
                btnText={"GET STARTED"}
                center={"center"}
              />
            </div>

            {/* Video col */}
            <div className="col-12 col-md-6 col-lg-7 ps-md-3 ps-lg-5 align-items-center">
              <div className="proofingGalleryVideoGroup">
                <video
                  className="proofingGalleryVideo"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source
                    src="/public/folio videos/proofing.mp4"
                    type="video/mp4"
                  />
                </video>
                <img
                  src="/public/folio images/proofing-controls.jpg"
                  className="videoControl w-50"
                  alt="Control"
                />

                <img
                  src="/public/folio images/favorite-selected-mobile.jpg"
                  className="coupleImg"
                  alt="Couple"
                />
                <CiHeart className="loveIcon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proofing2Section">
        <div className="container">
          <div className="text-center">
            <h4 className="text-uppercase colorBlack-600">Simplicity</h4>
            <h2>How does online proofing work?</h2>

            <div className="row justify-content-center align-items-center gap-3 gap-sm-4 gap-lg-1 py-4 py-sm-5">
              <div className="col-12 col-sm-3 col-lg-2">
                <ProofingTextGroup
                  number={"1"}
                  header={"Upload images"}
                  title={
                    "Upload images into a private gallery, created just for your client."
                  }
                />
              </div>
              <div className="col-12 col-sm-2 col-lg-1 d-none d-sm-flex">
                <img
                  src="/public/folio images/arrow-top.png"
                  className="img-fluid"
                  alt="Arrow Up"
                />
              </div>
              <div className="col-12 col-sm-3 col-lg-2">
                <ProofingTextGroup
                  number={"2"}
                  header={"Send invite"}
                  title={
                    "Let clients know their gallery is ready by emailing an invitation."
                  }
                />
              </div>
              <div className="col-12 d-none d-lg-flex col-lg-1">
                <img
                  src="/public/folio images/arrow-bottom.png"
                  className="img-fluid"
                  alt="Arrow Down"
                />
              </div>
              <div className="col-12 col-sm-3 col-lg-2">
                <ProofingTextGroup
                  number={"3"}
                  header={"Client selects"}
                  title={
                    "Your client(s) collaborate with you by choosing their favorites."
                  }
                />
              </div>
              <div className="col-12 col-sm-2 col-lg-1 d-none d-sm-flex">
                <img
                  src="/public/folio images/arrow-top.png"
                  className="img-fluid"
                  alt="Arrow Up"
                />
              </div>
              <div className="col-12 col-sm-3 col-lg-2">
                <ProofingTextGroup
                  number={"4"}
                  header={"View choices"}
                  title={
                    "Get notified and review all of your clients selections + comments."
                  }
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 gap-md-5 mb-5">
            <div className="">
              <video className="proofingVid1" autoPlay muted playsInline loop>
                <source
                  src="/public/folio videos/Photo-Proofing-for-Photographers - Lightfolio(1).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="text-center text-sm-start">
              <video className="proofingVid2" autoPlay muted playsInline loop>
                <source
                  src="/public/folio videos/Photo-Proofing-For-Photographers-Lightfolio.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Grid 2.2 */}
          <div className="row  py-5 reverseDirection justify-content-center">
            <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0 ">
              <GridTextGroup
                subHeader={"Favorites"}
                headerColor={"grey"}
                header={"Powerful Proofing Options"}
                title={
                  "Lightfolio proofing goes beyond the basics. Give your clients the ability to save and view selections across multiple devices. Give them the option to organize their selections into multiple lists and allow them to invite others to help mark favorites."
                }
                btnText={"GET STARTED"}
              />
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="px-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                    className="img-fluid "
                    alt={`Image ${currentImage + 1}`}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2*2 */}
      <section className="proofing3Section">
        <div className="container">
          <div className="row  py-5 ">
            <div className="col-12 col-md-6 px-lg-5">
              <div className="proofingImgPosition">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="poofingPosition1">
                    <img
                      src="/public/folio images/proofing-example-2.jpg"
                      className="img-fluid proofingImg1"
                      alt="Model"
                    />
                  </div>
                  <div className="poofingPosition2">
                    <img
                      src="/public/folio images/proofing-example-4.jpg"
                      className="img-fluid proofingImg2"
                      alt="Model"
                    />
                  </div>
                  <div className="proofingPosition3">
                    <img
                      src="/public/folio images/proofing-example-3.jpg"
                      className="img-fluid proofingImg3"
                      alt="Model"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pe-lg-3 pt-4 mt-5 mt-md-0 pt-md-0">
              <GridTextGroup
                subHeader={"ANALYTICS"}
                headerColor={"grey"}
                header={"Photo gallery activity reports"}
                title={
                  " Quickly identify which images have been viewed, how many times, and which images have been downloaded and/or favorited. Lightfolio analytics gives you insight into all your online gallery traffic."
                }
                btnText={"→ VISITOR ANALYTICS"}
                
              />
            </div>
          </div>
        </div>
      </section>

      <section className="proofing4Section">
        <div className="container">
          {/* Grid 2.2 */}
          <div className="row  py-5 reverseDirection justify-content-center">
            <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0 mt-3 mt-sm-0">
              <GridTextGroup
                subHeader={"Comments"}
                headerColor={"grey"}
                header={"Easy client communication"}
                title={
                  "Proofing is a collaborative process. You and your clients can send messages all within the app, on an image by image basis.."
                }
                btnText={"GET STARTED"}
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="px-2 d-flex justify-content-center">
                <div className="w-50">
                  <img
                    src="/public/folio images/communication-favorite.jpg"
                    className="img-fluid weddingCard"
                    alt="Wedding"
                  />
                  {/* Chole Card */}
                  <div className="d-flex gap-2 mt-4">
                    <img
                      src="/public/folio images/mug-chloe.jpg"
                      className="weddingCardChole"
                      alt="Chloe"
                    />
                    <div className="vstack">
                      <h4 className="fw-medium mb-0">Allison</h4>
                      <div className="weddingCardText1">
                        <p className="">
                          Ok, I think this is my favorite! Can we use it for the
                          cover? 😊{" "}
                        </p>
                        <p className="colorBlack-500 mt-1">32min ago</p>
                      </div>
                    </div>
                  </div>

                  {/*  Jessica Card*/}
                  <div className="d-flex flex-row-reverse gap-2 mt-4">
                    <img
                      src="/public/folio images/mug-jessica.jpg"
                      className="weddingCardChole"
                      alt="Jessica"
                    />
                    <div className="vstack align-items-end">
                      <h4 className="fw-medium mb-0 ">Clark Photography</h4>
                      <div className="weddingCardText1 weddingCardText2">
                        <p className="">
                          Sure thing! I'll update the mockup and shoot it over
                          to you by the morning!{" "}
                        </p>
                        <p className="colorBlack-500 mt-1">1min ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proofing5Section">
        <div className="container">
          <div className="text-center vstack gap-3">
            <h2>Every essential feature for easy photo proofing</h2>
            <h4>
              Not every client is the same. Fine tune each gallery by turning on
              only the features and options you need.
            </h4>
          </div>

          {/*  */}
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center mt-5">
            {[
              {
                icon: <AiOutlineWechat />,
                header: "Commenting",
                title:"By enabling the commenting feature, clients can apply notes to individual images.", 
              },
              {
                icon: <FaLock />,
                header: "Passwords",
                title:"Give access to the public or protect your galleries by enabling a password requirement.", 
              },
              {
                icon: <TbCircleLetterCFilled />,
                header: "Watermarks",
                title:"Protect your work by applying an optional watermark to some or all of your images.", 
              },
              {
                icon: <FaCloudDownloadAlt />,
                header: "Downloads",
                title:"Turn on self service downloads for specific folders or the entire gallery.", 
              },
              {
                icon: <MdOutlinePhoneIphone />,
                header: "Mobile Friendly",
                title:"Our proofing platform works just as well on your clients mobile device.", 
              },
              {
                icon: <HiCurrencyDollar />,
                header: "Sales",
                title:"Besides the ability to proof images, you can enable galleries with online sales (prints or downloads).", 
              },
              {
                icon: <TbWorldCog />,
                header: "Custom Domain",
                title:"If branding is important to you, upgrade to a paid plan and start using your own domain to present your images.", 
              },
              {
                icon: <GiWorld />,
                header: "Multilingual",
                title:"Lightfolio supports a dozen different languages. Present your galleries in the native language of your client base.", 
              },
              {
                icon: <GiRobotGrab />,
                header: "Analytics",
                title:"Quickly identify which images have been viewed, how many times, and which images have comments and have been favorited.", 
              },
              {
                icon: <FaFolderOpen />,
                header: "Folders",
                title:"Organize the images from your shoot and group related images into separate folders.", 
              },
              {
                icon: <FaSearchPlus />,
                header: "Search",
                title:"Give your clients the ability to search for images based on image descriptions and keywords.", 
              },
              
            
            ].map((content, index)=>(
              <div key={content.header + index} className="col px-md-5 py-5 mb-5 cardPadding">
                <GalleryCard icon={content.icon} title={content.title} > {content.header}</GalleryCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Proofing;
