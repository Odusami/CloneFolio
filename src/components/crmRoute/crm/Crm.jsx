import { Link, useLocation } from "react-router-dom";
import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./Crm.scss";
import { CiCircleCheck, CiMail } from "react-icons/ci";

import CarouselMovingImg from "../../animation/CarouselMovingImg";

const Crm = ({ handleNavigation }) => {
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

  const rightCarousel = [
    "folio images/docs-boudoir-contract.jpg",
    "folio images/docs-commercial-photo-contract.jpg",
    "folio images/docs-commercial-photography-contract.jpg",
    "folio images/docs-engagement-shoot-contract.jpg",
    "folio images/docs-photography-contract.jpg",
    "folio images/docs-portrait-contract.jpg",
    "folio images/docs-real-estate-photography-contract.jpg",
    "folio images/docs-wedding-photo-contract.jpg",
    "folio images/docs-wedding-photography-contract.jpg",
  ];
  const leftCarousel = [
    "folio images/docs-family-portrait-questionnaire.jpg",
    "folio images/docs-minor-model-release.jpg",
    "folio images/docs-model-release.jpg",
    "folio images/docs-photo-invoice.jpg",
    "folio images/docs-photography-inv.jpg",
    "folio images/docs-photography-invoice.jpg",
    "folio images/docs-print-photo-release.jpg",
    "folio images/docs-print-release.jpg",
    "folio images/docs-wedding-invoice.jpg",
    "folio images/docs-wedding-questionnaire.jpg",
  ];
  return (
    <>
      <section className="crmOneSection">
        <div className="container">
          <GridTextGroup
            subHeader={"Lightfolio Studio Manager"}
            header={"CRM built for photographers"}
            title={"It's everything you need to run your photography business."}
            btnText={"GET STARTED"}
            center={"center"}
          />
          <div className="py-5">
            <img
              src="folio images/dashboard-5.jpg"
              className="img-fluid"
              alt="Crm Dashboard"
            />
          </div>

          {/* Lightfolio Studio Manager Grid */}
          <h3 className="text-center fs-4 colorBlack my-5 fw-medium">
            Lightfolio Studio Manager helps you:
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center gap-md-2 gap-lg-5">
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">1</h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold">Book more clients</span>
                  <br />
                  Build a powerful, customized booking platform that gives you
                  and your clients everything needed to close deals faster.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">2</h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold">Elevate your brand</span>
                  <br />
                  Every interaction with a client communicates the value of your
                  brand. Use our premium platform to communicate your worth.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">3</h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold">Get organized, get stuff done</span>
                  <br />
                  Have your hands full getting contracts signed, collecting
                  payments and staying on top of your schedule? It's time to use
                  a CRM built for photographers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crmSecondSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gap-2 gap-sm-5 gap-lg-0">
            <div className="col order-last order-lg-first">
              <GridTextGroup
                subHeader={"Growth"}
                header={
                  <>
                    Booking clients <br /> just got a lot easier
                  </>
                }
                mainHeaderColor={"white"}
                title={
                  "You have a new lead and they're interested in booking. Be prepared with a platform that is ready to close the deal."
                }
                titleColor={"white"}
                btnText={""}
                headerColor={"grey"}
              />
              <h4 className="colorBlack-600">
                Complete your next booking in minutes, 24x7.
              </h4>
              <div className="vstack colorBlack-600 mt-4 gap-3">
                <div className="hstack align-items-center">
                  <CiCircleCheck size={17} strokeWidth={0.3} />

                  <h4 className="m-0 colorBlack-600 ms-1">
                    {" "}
                    <Link
                      to={"/crm/contract"}
                      onClick={(e) => handleNavClick(e, "/crm/contract")}
                      className="linkHover"
                    >
                      Contracts
                    </Link>
                  </h4>
                </div>
                <div className="hstack align-items-center">
                  <CiCircleCheck size={17} strokeWidth={0.3} />

                  <h4 className="m-0 colorBlack-600 ms-1">
                    {" "}
                    <Link
                      to={"/crm/invioce"}
                      onClick={(e) => handleNavClick(e, "/crm/invioce")}
                      className="linkHover"
                    >
                      Invoices
                    </Link>
                  </h4>
                </div>
                <div className="hstack align-items-center">
                  <CiCircleCheck size={17} strokeWidth={0.3} />

                  <h4 className="m-0 colorBlack-600 ms-1">
                    {" "}
                    <Link
                      to={"/crm/form"}
                      onClick={(e) => handleNavClick(e, "/crm/form")}
                      className="linkHover"
                    >
                      Questionnaires
                    </Link>
                  </h4>
                </div>
                <div className="hstack align-items-center">
                  <CiCircleCheck size={17} strokeWidth={0.3} />

                  <h4 className="m-0 colorBlack-600 ms-1">
                    {" "}
                    <Link
                      to={"/websites"}
                      onClick={(e) => handleNavClick(e, "/crm/websites")}
                      className="linkHover"
                    >
                      Booking Site
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col order-first	order-lg-last">
              <div className="photographyGroup p-5 p-sm-0">
                <img
                  src="folio images/happy-photographer.jpg"
                  className="img-fluid rounded"
                  alt="Happy Photographer"
                />
                <img
                  src="folio images/happy-photographer-2.jpg"
                  className="img-fluid photo2 rounded imgShadow "
                  alt="Happy Photographer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crmThirdSection pb-0">
        <div className="container mb-4">
          <div className="d-flex justify-content-center">
            <div className="brandTextGroup">
              <GridTextGroup
                subHeader={"Branding"}
                headerColor={"grey"}
                header={"Stand out from the crowd"}
                title={
                  "You're not the only show in town. It's time to up your game by defining the quality of your brand. Give your clients a professional user experience with custom designed everything."
                }
                btnText={""}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="carouselBody">
          <CarouselMovingImg start={"-100%"} direction={"0%"}>
            <div className="carouselTrack">
              {[...rightCarousel, ...rightCarousel].map((src, index) => (
                <img
                  key={src + index}
                  src={src}
                  alt={`carousel-img-${index}`}
                />
              ))}
            </div>
          </CarouselMovingImg>
        </div>
        <div className="carouselBody mt-4">
          <CarouselMovingImg start={"0%"} direction={"-100%"}>
            <div className="carouselTrack">
              {[...leftCarousel, ...leftCarousel].map((src, index) => (
                <img
                  key={src + index}
                  src={src}
                  alt={`carousel-img-${index}`}
                />
              ))}
            </div>
          </CarouselMovingImg>
        </div>
        {/* 2 * 2 */}
        <div className="container py-5">
          <div className="paddingS">
            <div className="row row-cols-1 row-cols-md-2 ">
              <div className="col">
                <div className="miniMutipleImgG">
                  <div className="mini1 text-center">
                    <img
                      src="folio images/examples-minis-families.jpg"
                      className="img-fluid"
                      alt="Minis Families"
                    />
                    <h5 className="font3 colorBlack">
                      <Link to={"mini-sessions/family"} className="linkH">
                        Families
                      </Link>{" "}
                    </h5>
                  </div>
                  <div className="mini2 text-center">
                    <img
                      src="folio images/examples-minis-holidays.jpg"
                      className="img-fluid"
                      alt="Minis Families"
                    />
                    <h5 className="font3 colorBlack">
                      <Link to={"mini-sessions/christmas"} className="linkH">
                        Christmas
                      </Link>{" "}
                    </h5>
                  </div>
                  <div className="mini3 text-center">
                    <img
                      src="folio images/examples-minis-boudoir.jpg"
                      className="img-fluid"
                      alt="Minis Families"
                    />
                    <h5 className="font3 colorBlack">
                      <Link to={"mini-sessions/boudior"} className="linkH">
                        Boudior
                      </Link>
                    </h5>
                  </div>
                  <div className="mini4 text-center">
                    <img
                      src="folio images/examples-minis-pets.jpg"
                      className="img-fluid"
                      alt="Minis Families"
                    />
                    <h5 className="font3 colorBlack">
                      <Link to={"mini-sessions/pet"} className="linkH">
                        Pet
                      </Link>
                    </h5>
                  </div>
                  <div className="mini5 text-center">
                    <img
                      src="folio images/examples-minis-fun.jpg"
                      className="img-fluid"
                      alt="Minis Families"
                    />
                    <h5 className="font3 colorBlack">
                      <Link to={"mini-sessions/fun-theme"} className="linkH">
                        Fun themes
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col p-3 pe-sm-5 pe-lg-0">
                <GridTextGroup
                  subHeader={"Booking"}
                  headerColor={"grey"}
                  header={"Mini Sessions"}
                  title={
                    "Everyone is offering mini sessions and you should be too if you aren't already. Our photography CRM makes setting up and booking your next mini a breeze."
                  }
                  btnText={"Explore mini-sessions"}
                  refLink={"/crm/session"}
                  navClick={handleNavigation}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crmFourSection paddingS">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-3 gap-md-0 align-items-center">
            <div className="col order-last order-md-first pe-lg-5">
              <GridTextGroup
                subHeader={"Email"}
                headerColor={"grey"}
                header={"Automation"}
                title={
                  "Let's be honest, your time is better spent shooting or selling, not performing tedious, repetitive tasks. We can help you by sending out automated payment and booking reminders."
                }
                btnText={"Get Started"}
                refLink={"/crm/invioce"}
                navClick={handleNavigation}
              />
            </div>

            <div className="col order-first order-md-last">
              <div className="emailGroup">
                <img
                  src="folio images/email-airplane.png"
                  className="img-fluid"
                  alt="Email"
                />
                <div className="hstack align-items-center gap-1 mail1">
                  <CiMail size={15} />
                  <p className="text-uppercase m-0">Payment Past Due</p>
                </div>
                <div className="hstack align-items-center gap-1 mail2">
                  <CiMail size={15} />
                  <p className="text-uppercase m-0">Booking Reminder</p>
                </div>
                <div className="hstack align-items-center gap-1 mail3">
                  <CiMail size={15} />
                  <p className="text-uppercase m-0"> Gallery Expiration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crmFirthSection paddingS">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 align-items-center gap-3 gap-sm-5 gap-md-0">
            <div className="col">
              <div className="crmIGroup pe-5 pb-4 p-sm-0 ">
                <img
                  src="folio images/proofing.jpg"
                  className="img-fluid rounded imgShadow photo1"
                  alt="Proofing"
                />
                <img
                  src="folio images/booking-beach-session.jpg"
                  className=" photo2 imgShadow "
                  alt="Beach Session"
                />
              </div>
            </div>
            {/*  */}
            <div className="col">
              <GridTextGroup
                subHeader={"Galleries & Website"}
                headerColor={"grey"}
                header={"CRM Integration"}
                title={
                  "Studio Manager is one of several products offered by Lightfolio. You can integrate with Lightfolio Websites (to collect new leads) and deliver your final product with Lightfolio Client Galleries. One platform for everything--it just makes life easier."
                }
                btnText={"Get Started"}
                refLink={"/websites"}
                navClick={handleNavigation}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crm;
