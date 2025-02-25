import "./Home.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../Nav/Nav";
import TextCard from "./textCard/TextCard.jsx";
import { span } from "framer-motion/client";
import { FaRegHeart } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsChatText } from "react-icons/bs";
import Footer from "./footer/Footer.jsx";
import Faq from "./faq/Faq.jsx";

const words = ["beautiful", "unique", "modern"];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section>
      <div className="coupleBg">
        <section className="homeFirstSection">
          <div className="container ">
            <Nav />
            <div className="d-flex textContentGroup">
              <div className="textContent">
                <h1 className="textAnimateGroup">
                  Create{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      className="textAnimate"
                      key={words[index]}
                      initial={{ width: "1px" }}
                      animate={{ width: "100%" }}
                      exit={{ width: "1px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {words[index]}
                      <motion.span
                        className="textCursor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      >
                        |
                      </motion.span>
                    </motion.span>
                  </AnimatePresence>
                  <br />
                </h1>
                <h1 className="nonAnimationText">client photo galleries</h1>
                <h6 className="my-lg-4 my-md-3">
                  Online photo galleries for easy sharing, downloads and sales
                </h6>
                <button className="mainBtn mt-1">START FOR FREE</button>
              </div>
            </div>
          </div>
          <div className="container-fluid homeMobileFirstSectionImg"></div>
        </section>

        {/* Second Section */}
        <section className="homeSecondSection">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center text-center pb-1 py-md-5">
              <h2 className="mt-5 mb-4">Customize your online photo gallery</h2>
              <h3 className="w-75 mb-5">
                <Link className="underlinedText">Cover themes</Link> ,{" "}
                <Link className="underlinedText">thumbnail styles</Link> and{" "}
                <Link className="underlinedText">font selections</Link> are just
                the beginning of all the available customization options. Stand
                out from the crowd and impress your clients with your custom
                designed photo galleries.
              </h3>
            </div>
          </div>
          {/* Stacked Image */}
          <div className="container-fluid mainBoxContainer pb-sm-5">
            <div className="boxContainer">
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
            <div className="row  gap-sm-2 gap-4 justify-content-center text-center fst-italic colorBlack-500 photoGroup">
              <div className="col-2 d-none d-lg-block">
                <img
                  src="/public/folio images/screen2.jpg"
                  className="img-fluid imageHover"
                  alt="Mansory Wide"
                />
                <p className="py-1">London // Masonry - Wide</p>
              </div>
              <div className="col-sm-3 col-lg-2">
                <img
                  src="/public/folio images/screen1.jpg"
                  className="img-fluid imageHover"
                  alt="Pins"
                />
                <p className="py-1">London // Pins</p>
              </div>
              <div className="col-sm-3 col-lg-2">
                <img
                  src="/public/folio images/screen3.jpg"
                  className="img-fluid imageHover"
                  alt="Mansory"
                />
                <p className="py-1">Berlin // Masonry</p>
              </div>
              <div className="col-sm-3 col-lg-2">
                <img
                  src="/public/folio images/screen5.jpg"
                  className="img-fluid imageHover"
                  alt="Dark Theme"
                />
                <p className="py-1">Auckland // Dark Theme</p>
              </div>
              <div className="col-2 d-none d-lg-block">
                <img
                  src="/public/folio images/screen4.jpg"
                  className="img-fluid imageHover"
                  alt="Santa Fe"
                />
                <p className="py-1">Santa Fe // Squares</p>
              </div>
            </div>
          </div>

          {/* TextCard Grid */}
          <div className="container py-5">
            <div className="row justify-content-center gap-sm-3 gap-md-0">
              <div className="col-md-4 col-lg-4 col-sm-12 px-lg-5">
                <TextCard
                  header={"Cover Page Styles"}
                  title={
                    "Fullscreen + single image, split screen + dual image, centered circle image and other options."
                  }
                >
                  8
                </TextCard>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 px-lg-5">
                <TextCard
                  header={"Font Options"}
                  title={
                    "A font for every style. Multiple serif, sans-serif and handwritten/script fonts are available. Set font size, color and more."
                  }
                >
                  <span className="powerNumber">30</span>
                </TextCard>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 px-lg-5">
                <TextCard
                  header={"Thumbnail Styles"}
                  title={
                    "Control thumbnail shape (rectangles, squares and circles) and size (thumbnails vs fullscreen photos)."
                  }
                >
                  8
                </TextCard>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="container pt-2">
            <div className="border-top border-1 colorBlack-600">
              <p className="text-center m-0 mt-4">POWERED BY</p>
              <div className="row justify-content-center align-items-center text-center py-5">
                <div className="col-2 ">
                  <img
                    src="/public/folio images/logo_paypal.gif"
                    className="w-50 img-fluid"
                    alt="Logo_paypal"
                  />
                </div>
                <div className="col-2">
                  <img
                    src="/public/folio images/logo_bayphoto.gif"
                    className="w-50 img-fluid"
                    alt="Logo_bayphoto"
                  />
                </div>
                <div className="col-2">
                  <img
                    src="/public/folio images/logo_aws.gif"
                    className="w-50 img-fluid"
                    alt="Logo_aws"
                  />
                </div>
                <div className="col-2">
                  <img
                    src="/public/folio images/logo_loxleycolour.gif"
                    className="w-50 img-fluid "
                    alt="Logo_loxleycolour"
                  />
                </div>

                <div className="col-2">
                  {" "}
                  <img
                    src="/public/folio images/logo_stripe.gif"
                    className="w-50 img-fluid"
                    alt="Logo_stripe"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Third Section */}
      <section className="homeThirdSection">
        <div className="container">
          <div>
            <div className="d-flex justify-content-end">
              <div className="thirdTextSize">
                <div className="photoProofTextGroup pe-lg-3">
                  <h2 className="mb-4 colorWhite">
                    Photo proofing <br /> for professionals
                  </h2>
                  <h6 className="mb-4 pe-lg-3 colorWhite lh-base">
                    A photo sharing platorm you and your clients will love.
                    View, select and communicate all online. Enable watermarks,
                    downloads, favorites and password protection.
                  </h6>
                  <button className="mainBtn mb-5">&rarr; PROOF PHOTOS</button>
                </div>
                <div className="d-flex stackedModel mb-5">
                  <div className="me-2 stackedImg model3">
                    <img
                      src="/public/folio images/cover-model-3.jpg"
                      className="img-fluid rounded"
                      alt="Model 3"
                    />
                    <div className="d-flex gap-2 stackedIcon colorWhite">
                      <FaRegHeart />
                      <LiaDownloadSolid />
                      <BsChatText />
                    </div>
                  </div>
                  <div className="me-2 stackedImg model2">
                    <img
                      src="/public/folio images/cover-model-2.jpg"
                      className="img-fluid rounded"
                      alt="Model 2"
                    />
                    <div className="d-flex gap-2 stackedIcon colorWhite">
                      <FaRegHeart />
                      <LiaDownloadSolid />
                      <BsChatText />
                    </div>
                  </div>
                  <div className=" stackedImg model1">
                    <img
                      src="/public/folio images/cover-model-1.jpg"
                      className="img-fluid rounded"
                      alt="Model 1"
                    />
                    <div className="d-flex gap-2 stackedIcon colorWhite">
                      <FaRegHeart />
                      <LiaDownloadSolid />
                      <BsChatText />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Picture text 6by6 grid */}
        <div className="container mt-2 mt-lg-5 pt-lg-5">
          {/* first */}
          <div className="row mb-5 py-5">
            <div className="col-12 col-md-6">
              <img
                src="/public/folio images/download-client-photos.jpg"
                className="img-fluid"
                alt="Client Picture"
              />
            </div>
            <div className="col-12 col-md-6 pe-lg-3">
              <h6 className="colorBlack-600 textLabel">DELIVERY</h6>
              <h2 className="mb-4 mt-2">Digital Downloads</h2>
              <h4 className="lh-base mb-4 pt-1">
                Conveniently deliver photos to your clients online. With every
                photo gallery, control file size and restrict access with a
                personalized password--all at the click of a button.
              </h4>
              <button className="textBtn"> &rarr; CLIENT DOWNLOADS</button>
            </div>
          </div>
          {/* second */}
          <div className="row mb-5 py-5 reverseDirection">
            <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0">
              <h6 className="colorBlack-600 textLabel">PORTAL</h6>
              <h2 className="mb-4 mt-2">
                A mini website for your photo galleriess
              </h2>
              <h4 className="lh-base mb-4 pt-1">
                Organize your client photo galleries into a central repository.
                This gives your clients an easy way to find all of your
                published online galleries. Customize your directory by choosing
                from several themes and use the SEO settings to improve your
                search engine rankings.
              </h4>
              <button className="textBtn"> &rarr; GALLERY DIRECTORIES</button>
            </div>
            <div className="col-12 col-md-6">
              <div className="px-2">
                <img
                  src="/public/folio images/gallery-directory.jpg"
                  className="img-fluid shadowImg"
                  alt="Gallery Picture"
                />
              </div>
            </div>
          </div>
          {/* third */}
          <div className="row mb-5 py-5 align-items-center">
            <div className="col-12 col-md-6 px-lg-5">
              <div className=" ">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="scaleBeach scaleBeachPosition1">
                    <img
                      src="/public/folio images/model-beach1.jpg"
                      className="rounded img-fluid"
                      alt="Model"
                    />
                  </div>
                  <div className="scaleBeachPosition2">
                    <img
                      src="/public/folio images/model-beach2.jpg"
                      className="rounded img-fluid"
                      alt="Model"
                    />
                  </div>
                  <div className="scaleBeach scaleBeachPosition3">
                    <img
                      src="/public/folio images/model-beach3.jpg"
                      className="rounded img-fluid"
                      alt="Model"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pe-lg-3 pt-4 pt-md-0">
              <h6 className="colorBlack-600 textLabel">ANALYTICS</h6>
              <h2 className="mb-4 mt-2">Photo gallery activity reports</h2>
              <h4 className="lh-base mb-4 pt-1">
                Quickly identify which images have been viewed, how many times,
                and which images have been downloaded and/or favorited.
                Lightfolio analytics gives you insight into all your online
                gallery traffic.
              </h4>
              <button className="textBtn"> &rarr; VISITOR ANALYTICS</button>
            </div>
          </div>
          {/* forth */}
          <div className="row mb-5 py-5 reverseDirection">
            <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0">
              <h6 className="colorBlack-600 textLabel">SALES</h6>
              <h2 className="mb-4 mt-2">Sell Online</h2>
              <h4 className="lh-base mb-4 pt-1">
                Allow your clients to purchase prints, digital downloads and
                more. Process your own orders or integrate with our photo lab
                partners. Set your own pricing, minimum orders, shipping rates
                and create coupons.
              </h4>
              <button className="textBtn"> &rarr; ONLINE SALES</button>
            </div>
            <div className="col-12 col-md-6 px-2">
              <img
                src="/public/folio images/online-sales.jpg"
                className="img-fluid shadowImg"
                alt="Online Sales"
              />
            </div>
          </div>
        </div>
        {/* Global Network */}
        <div className="container text-center pb-5">
          <div className="vstack gap-4 align-items-center">
            <h2>Global Network</h2>
            <h4>
              Create your free online photo gallery and join photographers in
              125+ countries around the globe. Join your peers today.
            </h4>
            <img
              src="/public/folio images/world-photographers.jpg"
              className="img-fluid w-50 mb-4 mb-md-5"
              alt="World Photographers"
            />
          </div>

          {/* Lightfolio Products */}
          <h2>More Lightfolio Products</h2>
          <h4 className="fst-italic colorBlack-600">{`{ Lightfolio is a suite of online tools for photographers }`}</h4>

          <div className="container mt-3 mt-md-5">
            <div className="row justify-content-center gap-md-4">
              <div className="col-12 col-md-3">
                <div className="d-flex gap-3 text-start">
                  <h4>6</h4>
                  <div>
                    <h5 className="colorBlack-400">
                      <span>
                        <Link to={'/photography-crm'} className="text-decoration-none colorBlack fw-medium">Photography CRM</Link>{" "}
                      </span>{" "}
                     Studio management software helps you get a
                      handle on your photography business. Use our platform for
                      project management. Create your first mini session with
                      online bookings
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex gap-3 text-start">
                  <h4>6</h4>
                  <div>
                    <h5 className="colorBlack-400">
                      <span>
                        <Link to={'/photography-contract'} className="text-decoration-none colorBlack fw-medium">
                        Photography Contracts </Link>{" "}
                      </span>{" "}
                      Creating contracts is a breeze. Use our free templates as
                      a starting point and customize them to your needs. Try out
                      our templates for weddings, portraits, boudoir and more.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex gap-3 text-start">
                  <h4>6</h4>
                  <div>
                    <h5 className="colorBlack-400">
                      <span>
                        <Link to={'/photograpy-invioce'} className="text-decoration-none colorBlack fw-medium">
                        Photography Invoices</Link>{" "}
                      </span>{" "}
                      Send a custom designed invoice to get paid for your
                      commercial, event or portrait photography. Multiple
                      payment options including credit cards, PayPal, Venmo and
                      Cashapp.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                  {/* FAQ */}
                  <div className="container">
                    <div className="row justify-content-center pb-5">
                      <div className="col-12 col-md-6 mb-3">
                        <div className="vstack gap-2">
                        <h6 className="colorBlack-600 textLabel">FAQ</h6>
                        <h2>Questions about client galleries?</h2>
                        <img src="/public/folio images/faq.jpg" className="img-fluid w-25 rounded" alt="Faq" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6"><Faq/></div>
                    </div>
                  </div>

              
            {/* Footer */}
            <Footer/>
      </section>
      </section>
    </>
  );
};

export default Home;
