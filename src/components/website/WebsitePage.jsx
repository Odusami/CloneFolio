import CarouselMovingImg from "../animation/CarouselMovingImg";
import GridTextGroup from "../gridTextGroup/GridTextGroup";
import { Link, useLocation } from "react-router-dom";
import "./WebsitePage.scss";
import GalleryCard from "../galleryRoute/galleries/galleryCard/GalleryCard";
import { BsChatDotsFill } from "react-icons/bs";
import { FaUnlockAlt, FaKeycdn } from "react-icons/fa";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoMdCloudDownload } from "react-icons/io";
import { SiAdobefonts } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import Faq from "../home/faq/Faq";

const WebsitePage = ({ handleNavigation }) => {
  const location = useLocation();

  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // Prevent ripple if already on the target page
    if (location.pathname === path) {
      e.preventDefault();
      return;
    }
    handleNavigation(e, path);
  };

  const faqData = {
    id: "websitesFaq",
    content: [
      {
        id: "websitesFaq1",
        header: "Is it easy to create a Lightfolio website??",
        title:
          "Lightfolio websites allow you to design and publish websites with little effort. Simply start out with one of our templates built exclusively for photographers, and then fine tune your site with our easy to use website builder.",
      },
      {
        id: "websitesFaq2",
        header: "Do I need Wordpress?",
        title:
          "No. Our sites are hosted in the cloud and do not require Wordpress hosting. We take care of all that for you. Using our website builder is a breeze--no Wordpress complexities.",
      },
      {
        id: "websitesFaq3",
        header: "Do I need to know how to code?",
        title:
          "No coding needed. Much of the 'building' process is a series of design choices, so there is no technical learning curve. You can figure out our intuitive builder in minutes.",
      },
      {
        id: "websitesFaq4",
        header: "Can I use my own domain?",
        title:
          "You can use your existing domain or choose to use a free, custom Lightfolio domain. Regardless of which option you choose, all Lightfolio sites are protected with SSL encryption.",
      },
      {
        id: "websitesFaq5",
        header: "Can I create a website for free?",
        title:
          "Any website you create starts out on the free tier. Only upgrade if you need to access any of our premium features.",
      },
      {
        id: "websitesFaq6",
        header: "Will my site be SEO friendly?",
        title:
          "Lightfolio websites are built with search engine optimization (SEO) in mind. Having a website that can't be found is of little use. Every page is ready for your custom SEO so you can index and rank on all the important search engines.",
      },
      {
        id: "websitesFaq7",
        header: "Will my website work on mobile?",
        title:
          "Every Lightfolio website implements responsive design and is mobile ready. Your site is designed to look goog on any device (mobile, tablet, laptop or desktop computer).",
      },
      {
        id: "websitesFaq8",
        header: "Have more questions?",
        title: "Please reach out with other question at hello@clonefolio.com",
      },
    ],
  };
  const images = [
    "./folio images/web-template-1.jpg",
    "./folio images/web-template-2.jpg",
    "./folio images/web-template-3.jpg",
    "./folio images/web-template-4.jpg",
    "./folio images/web-template-5.jpg",
    "./folio images/web-template-6.jpg",
    "./folio images/web-template-7.jpg",
    "./folio images/web-template-8.jpg",
  ];

  return (
    <>
      <section className="websiteSectionOne">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-7 col-lg-6">
              <GridTextGroup
                subHeader={"Lightfolio Websites"}
                header={"Build Your Photography Website"}
                title={
                  "Build your website in minutes. Get started with a template. Add custom pages + blocks. Publish and share with the world."
                }
                btnText={"GET STARTED"}
                center={"center"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {images.slice(0, 5).map((img, index) => {
            const isEven = index % 2 === 0;
            const hideOnSmall = index >= 3 ? "d-none d-md-block" : "";
            return (
              <div className={`col ${hideOnSmall}`}>
                <img
                  key={img + index + "H"}
                  src={img}
                  alt={`image-${index}`}
                  className={`${isEven ? "imgDown img-fluid" : "img-fluid"}`}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="websiteSectionTwo paddingS">
        <div className="container">
          <div className="row gap-4 gap-md-0 ">
            <div className="col-md-5 order-last order-md-first">
              <GridTextGroup
                subHeader={"Create"}
                headerColor={"grey"}
                header={"Easy-to-use Site Builder"}
                title={
                  "No Wordpress server setups, no programming. All you need is your sense of design. Use our pre-existing building blocks and choose from multiple customization options. Buidling a beautiful, custom website is effortless."
                }
                btnText={"GET STARTED"}
              />
            </div>
            <div className="col-md-7 order-first order-md-last">
              <div className="col-md-11 col-lg-10">
                <video
                  className="img-fluid imgShadow "
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src="./folio videos/builder.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="websiteSectionThree">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <GridTextGroup
                subHeader={"Templates"}
                headerColor={"grey"}
                header={"Multiple Templates"}
                title={
                  "Our templates will have you out of the gate and up and running in no time."
                }
                btnText={""}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="carouselBody mt-4">
          <CarouselMovingImg start={"0%"} direction={"-100%"}>
            <div className="carouselTrack">
              {[...images, ...images].map((src, index) => (
                <img
                  key={src + index}
                  src={src}
                  alt={`carousel-img-${index}`}
                />
              ))}
            </div>
          </CarouselMovingImg>
        </div>
      </section>

      <section className="websiteSectionFour">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Design"}
                headerColor={"grey"}
                header={"Customization Options"}
                title={
                  "Use our templates to quickly build your website and then use our wide array of options to make the website truly yours. Select custom fonts, colors, layouts, content blocks and more."
                }
                btnText={"GET STARTED"}
              />
            </div>
            {/* PICTURE COL */}
            <div className="col text-center text-md-end order-first order-md-last">
              <img
                src="./folio images/palette.jpg"
                className="img-fluid rounded imgShadow"
                alt="Palette"
              />
            </div>
          </div>

          <div className="row paddingS row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* Picture col */}
            <div className="col">
              <img
                src="./folio images/proofing.jpg"
                className="img-fluid rounded responsiveWidth"
                alt="Proofing"
              />
            </div>
            {/* Text Col */}
            <div className="col">
              <GridTextGroup
                subHeader={"Sync"}
                headerColor={"grey"}
                header={"CRM & Client Gallery Integration"}
                btnText={"GET STARTED"}
                title={
                  <>
                    You've built your website to market your business and
                    solicit new leads. Make it easier to book more leads by
                    integrating with Lightfolio{" "}
                    <Link
                      to={"/crm"}
                      onClick={(e) => handleNavClick(e, "/crm")}
                      className="linkH"
                    >
                      Studio Manager
                    </Link>{" "}
                    Studio Manager — a CRM built for photographers.
                    <br /> <br />
                    Have galleries you want to share with your clients? You can
                    also sync your website with your Lightfolio{" "}
                    <Link
                      to={"/gallery"}
                      onClick={(e) => handleNavClick(e, "/gallery")}
                      className="linkH"
                    >
                      Client Galleries
                    </Link>
                    Client Galleries
                  </>
                }
              />
            </div>
          </div>

          <div className="row paddingS row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Publish"}
                headerColor={"grey"}
                header={"Blogs"}
                title={
                  "Keep your content fresh. Give clients and prospective clients more insight into your brand, into your services and keep them updated by showing off your latest work."
                }
                btnText={"GET STARTED"}
              />
            </div>
            {/* PICTURE COL */}
            <div className="col text-center text-md-end order-first order-md-last">
              <img
                src="./folio images/blog.jpg"
                className="img-fluid rounded "
                alt="Blog"
              />
            </div>
          </div>

          <div className="row paddingS row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* Picture col */}
            <div className="col">
              <img
                src="./folio images/seo.jpg"
                className="img-fluid rounded responsiveWidth"
                alt="Seo"
              />
            </div>
            {/* Text Col */}
            <div className="col">
              <GridTextGroup
                subHeader={"Search"}
                headerColor={"grey"}
                header={"SEO"}
                btnText={"GET STARTED"}
                title={
                  "Use our SEO tools to optimize your site for search engines. Customize titles, descriptions, images and more to increase your visibility with Google and other major search engines."
                }
              />
            </div>
          </div>

          <div className="row paddingS row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"E-Commerce"}
                headerColor={"grey"}
                header={"Set Up Shop"}
                title={
                  "It's simple. Make it easy for clients to book your services. A full-featured, user-friendly booking site makes it harder for prospective clients to leave your website without booking a session."
                }
                btnText={"GET STARTED"}
              />
            </div>
            {/* PICTURE COL */}
            <div className="col text-center text-md-end order-first order-md-last">
              <img
                src="./folio images/ecommerce.jpg"
                className="img-fluid rounded "
                alt="Ecommerce"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="websiteSectionFive">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <GridTextGroup
                subHeader={"Getting Started"}
                headerColor={"grey"}
                header={"Create a website in 5 easy steps"}
                title={
                  <>
                    <div className="mb-3">
                      <span className="numS">1</span>{" "}
                      <span className="fw-semibold">Pick a template.</span>{" "}
                      Getting started is easy, just choose from any of our ready
                      made templates designed specifically for photographers.
                    </div>

                    <div className="mb-3">
                      <span className="numS">2</span>{" "}
                      <span className="fw-semibold">
                        Add and customize content.
                      </span>{" "}
                      Add pages, images and text and then personalize your site
                      by choosing from many design options.
                    </div>
                    <div className="mb-3">
                      <span className="numS">3</span>{" "}
                      <span className="fw-semibold">
                        Enable additional features.
                      </span>{" "}
                      Go beyond a basic site by adding your own blog, a store
                      and by syncing with Lightfolio client galleries.
                    </div>
                    <div className="mb-3">
                      <span className="numS">4</span>{" "}
                      <span className="fw-semibold">Connect your domain.</span>{" "}
                      Use your existing domain, or use a free custom domain with
                      Lightfolio.
                    </div>
                    <div className="mb-3">
                      <span className="numS">5</span>{" "}
                      <span className="fw-semibold">Publish.</span> Grow your
                      online presense and share your site with future clients
                      and with the world!
                    </div>
                  </>
                }
                btnText={"GET STARTED"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="websiteSectionSix ">
        <div className="container">
          <div className="text-center vstack gap-3">
            <h2>Every essential feature for your website</h2>
            <h4>
              Your Lightfolio website comes with these additional features:
            </h4>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center mt-5">
            {[
              {
                icon: <BsChatDotsFill />,
                header: "Custom Domains",
                title:
                  "You can use your own domain, www.mycompany.com, to transparently connect to Lightfolio websites.",
              },
              {
                icon: <FaUnlockAlt />,
                header: "Analytics",
                title:
                  "Not only can you track how many visitors you have, but you can also monitor IP address, geolocation, web browser and device type.",
              },
              {
                icon: <LuMonitorSmartphone />,
                header: "Responsive Design",
                title:
                  "Over 50% of web traffic today is on mobile devices. Our websites are designed to look great on desktop computer, tablet or phone.",
              },
              {
                icon: <IoMdCloudDownload />,
                header: "SSL Encryption",
                title:
                  "Every Lightfolio website gets its own SSL certificate. Your site is safe and secure.",
              },
              {
                icon: <SiAdobefonts />,
                header: "99+ Fonts",
                title: "Customize your site by choosing from dozens of fonts.",
              },
              {
                icon: <AiFillInstagram />,
                header: "Instagram Integration",
                title:
                  "Share your social media posts on your website by connecting to your Instagram account.",
              },

              {
                icon: <FaKeycdn />,
                header: "CDN",
                title:
                  "Speedy performance for your global audience. We use a content delivery network to ensure your content loads fast, from anywhere.",
              },
            ].map((content, index) => (
              <div
                key={content.header + index}
                className="col px-md-5 py-5 mb-5 cardPadding"
              >
                <GalleryCard icon={content.icon} title={content.title}>
                  {" "}
                  {content.header}
                </GalleryCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="websiteSectionSeven">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-3">
              <div className="vstack gap-2">
                <h6 className="colorBlack-600 textLabel">FAQ</h6>
                <h2>Questions about our website builder?</h2>
                <img
                  src="./folio images/faq.jpg"
                  className="img-fluid w-25 rounded"
                  alt="Faq"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Faq faqData={faqData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsitePage;
