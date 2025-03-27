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
import GridTextGroup from "../gridTextGroup/GridTextGroup.jsx";

const words = ["beautiful", "unique", "modern"];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // FAQ DATA
  const faqData = {
    id: "parentFaq",
    content: [
      {
        id: "faq1",
        header: "Why choose Lightfolio client galleries?",
        title:
          "Our online galleries are built for professional photographers. You have a host of custom design options so you can create galleries that match your brand. Enable downloads, favorites, online sales and several other options for each gallery.",
      },
      {
        id: "faq2",
        header: "Can I upload my galleries for free?",
        title:
          "Yes. Our base plan allows free online photo galleries, where you can upload up to a gigabyte of images. You will have access to most every feature found on paid tiers. Upgrade only when you need more storage.",
      },
      {
        id: "faq3",
        header: "Can I control who sees my gallery?",
        title:
          "Photgraphers can limit access to their online galleries with a PIN or by requiring email + password authentication. The are optional settings you can enable.",
      },
      {
        id: "faq4",
        header: "What options do I have with downloads?",
        title:
          "Each of your photo galleries can restrict download types (single image vs entire gallery) and download sizes. Download delivery is also tracked so you can confirm which clients received their images.",
      },
      {
        id: "faq5",
        header: "What are favorites?",
        title:
          "Favorites give your clients the ability to select, collaborate and comment on their favorite images in your photo gallery. Its a convenient proofing system.",
      },
      {
        id: "faq6",
        header: "Can I use my own domain?",
        title:
          "All paid plans allow you to use your own domain to display the contents of your online galleries. Free plans allow you to choose a custom Lightfolio domain (mycompany.lightfolio.com).",
      },
      {
        id: "faq7",
        header: "Will my galleries load fast from different locations?",
        title:
          "Performance is important. All photo gallery content is delivered by a global content delivery network (CDN) to ensure your images load fast.",
      },
      {
        id: "faq8",
        header: "Do you charge a commission?",
        title:
          "For free plans, there is a commission when selling through your online store. However, all paid plans have 0% commission. This is a great way to try out sales on the free tier and if you start selling regularly, upgrade as needed.",
      },
      {
        id: "faq9",
        header: "Can I upload videos to my gallery?",
        title:
          "Video uploads are no possible in your online gallery. This feature is currently in beta--simply request access to start uploading your own videos directly to Lightfolio.",
      },
      {
        id: "faq10",
        header: "Can I protect my images with a watermark?",
        title:
          "Yes. Copyright protection is important to photographers and so watermarks are an option you can enable. Create text or image based watermarks and apply them on any gallery.",
      },
      {
        id: "faq11",
        header: "Do you have a Lightroom integration?",
        title:
          "Use our free Lightroom plugin to upload and sync photos in your galleries.",
      },
      {
        id: "faq12",
        header: "Do you support multiple languages?",
        title:
          "We serve photographers all across the world and now offer support for over a dozen languages. Display your online galleries using your clients native language.",
      },
      {
        id: "faq13",
        header: "How will my galleries display on a mobile device?",
        title:
          "Lightfolio photo galleries are built to display on any device. Clients can view your photo galleries on desktop, laptop, tablet or mobile device.",
      },
      {
        id: "faq14",
        header: "Can I promote my own brand?",
        title:
          "Every photographer can promote their brand by using your own studio logo and favicon on all galleries.",
      },
      {
        id: "faq15",
        header: "How do I share my gallery with clients?",
        title:
          "Sharing client galleries is easy. Add a custom message and login & download details your gallery invitations. Keep track of who has visited each gallery to sure your clients received the invite.",
      },
      {
        id: "faq16",
        header: "Do you support any integrations with Lightfolio galleries?",
        title:
          "Our other products (Studio Manager, Websites) both integrate with Lightfolio Client Galleries. Using one platform to manage your entire photography business makes life much, much easier.",
      },
      {
        id: "faq17",
        header: "Have more questions?",
        title: "Please reach out with other question at hello@clonefolio.com",
      },
    ],
  };
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
                <h2 className="mt-5 mb-4">
                  Customize your online photo gallery
                </h2>
                <h3 className="w-75 mb-5">
                  <Link className="underlinedText">Cover themes</Link> ,{" "}
                  <Link className="underlinedText">thumbnail styles</Link> and{" "}
                  <Link className="underlinedText">font selections</Link> are
                  just the beginning of all the available customization options.
                  Stand out from the crowd and impress your clients with your
                  custom designed photo galleries.
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
                      View, select and communicate all online. Enable
                      watermarks, downloads, favorites and password protection.
                    </h6>
                    <button className="mainBtn mb-5">
                      &rarr; PROOF PHOTOS
                    </button>
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
    

                <GridTextGroup
                  subHeader={"DELIVERY"}
                  headerColor={'grey'}
                  header={"Digital Downloads"}
                  title={
                    "Conveniently deliver photos to your clients online. With everyphoto gallery, control file size and restrict access with apersonalized password--all at the click of a button."
                  }
                  btnText={"→ CLIENT DOWNLOADS"}
                  btnColor={'grey'}
                />
              </div>
            </div>
            {/* second */}
            <div className="row mb-5 py-5 reverseDirection">
              <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0">
            
                <GridTextGroup 
                subHeader={'PORTAL'}
                headerColor={'grey'}
                header={'A mini website for your photo galleriess'}
                title={' Organize your client photo galleries into a centralrepository. This gives your clients an easy way to find all ofyour published online galleries. Customize your directory by from several themes and use the SEO settings to improve your search engine rankings.'}
                btnText={'→ GALLERY DIRECTORIES'}
                btnColor={'grey'}
                />
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
          

                <GridTextGroup 
                subHeader={'ANALYTICS'}
                headerColor={'grey'}
                header={'Photo gallery activity reports'}
                title={' Quickly identify which images have been viewed, how many times, and which images have been downloaded and/or favorited. Lightfolio analytics gives you insight into all your online gallery traffic.'}
                btnText={'→ VISITOR ANALYTICS'}
                btnColor={'grey'}
                />
              </div>
            </div>
            {/* forth */}
            <div className="row mb-5 py-5 reverseDirection">
              <div className="col-12 col-md-6 pe-lg-5 pt-4 pt-md-0">
         


                <GridTextGroup 
                subHeader={'SALES'}
                headerColor={'grey'}
                header={'Sell Online'}
                title={'Allow your clients to purchase prints, digital downloads and more. Process your own orders or integrate with our photo lab partners. Set your own pricing, minimum orders, shipping rates and create coupons.'}
                btnText={'→ ONLINE SALES'}
                btnColor={'grey'}
                />
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
                          <Link
                            to={"/photography-crm"}
                            className="text-decoration-none colorBlack fw-medium"
                          >
                            Photography CRM
                          </Link>{" "}
                        </span>{" "}
                        Studio management software helps you get a handle on
                        your photography business. Use our platform for project
                        management. Create your first mini session with online
                        bookings
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
                          <Link
                            to={"/photography-contract"}
                            className="text-decoration-none colorBlack fw-medium"
                          >
                            Photography Contracts{" "}
                          </Link>{" "}
                        </span>{" "}
                        Creating contracts is a breeze. Use our free templates
                        as a starting point and customize them to your needs.
                        Try out our templates for weddings, portraits, boudoir
                        and more.
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
                          <Link
                            to={"/photograpy-invioce"}
                            className="text-decoration-none colorBlack fw-medium"
                          >
                            Photography Invoices
                          </Link>{" "}
                        </span>{" "}
                        Send a custom designed invoice to get paid for your
                        commercial, event or portrait photography. Multiple
                        payment options including credit cards, PayPal, Venmo
                        and Cashapp.
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
                  <img
                    src="/public/folio images/faq.jpg"
                    className="img-fluid w-25 rounded"
                    alt="Faq"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <Faq faqData={faqData}/>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Home;
