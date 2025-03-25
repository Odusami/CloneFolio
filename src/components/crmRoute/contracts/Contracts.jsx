import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./Contracts.scss";
import { IoHammerOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiQuillPenLine } from "react-icons/ri";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiSignatureLight } from "react-icons/pi";
import { div } from "framer-motion/client";

const Contracts = () => {
  return (
    <>
      <section className="contractOneSection">
        <div className="container">
          <div className="mb-3 mb-sm-0">
            <GridTextGroup
              subHeader={"Lightfolio Studio Manager"}
              header={
                <>
                  Photography contracts
                  <br /> for professionals
                </>
              }
              title={
                "Allow clients to view, sign and download documents online."
              }
              btnText={"Get Started"}
              center={"center"}
            />
          </div>

          <div className="text-center coverGroup">
            <img
              src="/public/folio images/documents-cover.jpg"
              className="img-fluid"
              alt="Document Cover"
            />
            <img
              src="/public/folio images/documents-cover-build.png"
              className="img1"
              alt="Cover Build"
            />
            <img
              src="/public/folio images/documents-cover-cover.png"
              className="img2"
              alt="Cover Add"
            />
            <img
              src="/public/folio images/documents-cover-invoice.png"
              className="img3"
              alt="Cover Invoice"
            />
          </div>
        </div>
      </section>

      <section className="contractTwoSection">
        <div className="container">
          <div className="vstack text-center gap-4 px-lg-5 mb-5">
            <h2>10 Starter Contract Templates</h2>
            <h4>
              If you don't have your own photography contracts, no problem. We
              have several ready made photography contract templates that you
              can use as a starting point. Simply edit the pertinent details and
              then send it off for your clients to complete, all online.
            </h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            {[
              {
                image:
                  "/public/folio images/cover-preview-portrait-contract.jpg",
                header: "Portrait photography contract",
                title: "Family portraits, headshots, corporate clients",
              },
              {
                image:
                  "/public/folio images/cover-preview-engagement-contract.jpg",
                header: "Engagement shoot contract",
                title: "Session agreements for couples",
              },
              {
                image: "/public/folio images/cover-preview-photo-release.jpg",
                header: "Print photo release",
                title: "Give clients limited usage and reproduction rights",
              },
              {
                image:
                  "/public/folio images/cover-preview-wedding-contract.jpg",
                header: "Wedding photography contract",
                title:
                  "Contract terms for you and your bride and groom clients",
              },
              {
                image:
                  "/public/folio images/cover-preview-boudoir-contract.jpg",
                header: "Boudoir photography contract",
                title: "An agreement for intimate shoots",
              },
              {
                image:
                  "/public/folio images/cover-preview-event-photography-contract.jpg",
                header: "Event photography contract",
                title: "A contract for your next booked event",
              },
              {
                image:
                  "/public/folio images/cover-preview-commercial-contract.jpg",
                header: "Commercial photography contract",
                title: "An agreement for commercial clients",
              },
              {
                image:
                  "/public/folio images/cover-preview-real-estate-contract.jpg",
                header: "Real estate photography contract",
                title: "Use a contract for property photography",
              },
              {
                image:
                  "/public/folio images/cover-preview-second-shooter-contract.jpg",
                header: "Second shooter contract",
                title: "Contract language for second shooters and assistants",
              },
              {
                image:
                  "/public/folio images/cover-preview-photo-booth-contract.jpg",
                header: "Photo booth contract",
                title: "Sample contract for photo booth services",
              },
            ].map((content, index) => (
              <div key={content.header + index} className="col mb-5">
                <div className="contractGrid">
                  <div>
                    <img
                      src={content.image}
                      alt={content.title}
                      className="img-fluid imgShadow rounded"
                    />
                    <h4 className="fw-semibold m-0 mb-1 mt-3">
                      {content.header}
                    </h4>
                    <p className="colorBlack-500">{content.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contractThreeSection">
        <div className="container">
          <h2 className="text-center mb-5">How it works</h2>
          <div className="row gap-3 justify-content-center gap-4 gap-sm-3">
            {[
              {
                icon: <IoHammerOutline />,
                header: "1. Build",
                title:
                  "Get started with a template or build your document from scratch.",
              },
              {
                icon: <CiMail />,
                header: "2. Send",
                title:
                  "Send email notifications to all parties, inviting them to view your document.",
              },
              {
                icon: <PiSignatureLight />,
                header: "3. Sign",
                title:
                  "Each invited client (and you) add their signatures and initials.",
              },
              {
                icon: <PiCurrencyCircleDollarLight />,
                header: "4. Pay",
                title:
                  "If an invoice is attached, your client pays online via credit card.",
              },
              {
                icon: <IoIosCheckmarkCircleOutline />,
                header: "5. Finish",
                title:
                  "Everything is completed and PDFs are sent to all the parties.",
              },
            ].map((content, index) => (
              <div key={content.header + index} className="col m-auto">
                <div className="gridGroup ">
                  <div className="iconP mb-3">{content.icon}</div>
                  <div>
                    <h4 className="fw-semibold">{content.header}</h4>
                    <p>{content.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*  */}
        </div>
      </section>

      <div className="container ">
        <div className="row row-cols-1 row-cols-md-2 gap-3 gap-md-0 paddingS">
          <div className="col text-center">
            <img
              src="/public/folio images/cover-page-3.jpg"
              className="img-fluid w-75"
              alt="Cover Page"
            />
          </div>
          <div className="col">
            <GridTextGroup
              subHeader={"Cover Pages"}
              headerColor={"grey"}
              header={"Wow clients with a cover page using your own images"}
              title={
                "Let's face it, contracts are boring, but they don't have to be. Now your contracts can be as personalized as your photo galleries. Elevate your brand and increase client conversion rates by adding custom cover pages to any document. Your photography contracts have never looked better"
              }
              btnText={"Get Started"}
            />
          </div>
        </div>

        {/* Online Payments */}
        <div className="row row-cols-1 row-cols-md-2 gap-3 gap-md-0 ">
          <div className="col">
            <GridTextGroup
              subHeader={"Online Payments"}
              headerColor={"grey"}
              header={"Attach an invoice and collect payments online"}
              title={
                "Getting your clients to sign and agree to terms is only half the battle. Easily attach an invoice and collect payments online to confirm their booking."
              }
              btnText={"Get Started"}
            />
          </div>
          <div className="col text-center">
            <img
              src="/public/folio images/invoice-2.gif"
              className="img-fluid w-75"
              alt="Invoice"
            />
          </div>
        </div>

        {/* Legally Binding */}
        <div className="row row-cols-1 row-cols-md-2 gap-3 gap-md-0 paddingS">
              <div className="col text-center">
                <img
                  src="/public/folio images/signature.gif"
                  className="img-fluid w-75 imgShadow rounded"
                  alt="Cover Page"
                />
              </div>
              <div className="col">
                <GridTextGroup
                  subHeader={"Legally Binding"}
                  headerColor={"grey"}
                  header={"Confidently use online, legally binding documents"}
                  title={"The use of online contracts and e-signatures is now quite commonplace. Lightfolio Documents fully adheres to national and international standards as outlined in laws such as the ESIGN and UETA Acts."}
                  btnText={'Get Started'}
                />
              </div>
            </div>
      </div>
    </>
  );
};

export default Contracts;
