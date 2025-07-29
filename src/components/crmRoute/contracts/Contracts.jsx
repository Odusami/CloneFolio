import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./Contracts.scss";
import { IoHammerOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiQuillPenLine } from "react-icons/ri";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiSignatureLight } from "react-icons/pi";

import { div } from "framer-motion/client";
import Faq from "../../home/faq/Faq";
import CrmAlbumGroup from "./crmAlbumGroup/CrmAlbumGroup";

const Contracts = () => {
  const faqData = {
    id: "contractsFaq",
    content: [
      {
        id: "contractsFaq1",
        header: "What is a photography contract?",
        title:
          "A photography contract is a legally binding agreement between a photographer and their client(s). It defines the rights and obligations of the parties, to include payments, deliverables, schedules, etc. A good contract will also cover copyright, usage rights, limits of liability and more.",
      },
      {
        id: "contractsFaq2",
        header: "Do I need a photography contract?",
        title:
          "Absolutely. A contract is necessary to protect your rights and minimize your risks when entering into an agreement with your client(s).",
      },
      {
        id: "contractsFaq3",
        header: "What should my contract include?",
        title: (
          <>
            At a minimum, your contract should include the following details:
            <ul>
              <li>
                Identify the relevant parties with full contact information
              </li>
              <li>
                Cost of services, payment schedule and terms of any deposit (is
                it refundable)
              </li>
              <li>Schedule identifying locations and start and end times</li>
              <li>
                Spell out the deliverables — what the client should expect to
                receive
              </li>
              <li>
                Delivery schedule that informs the client when they should
                expect to receive any finished goods or downloads
              </li>
              <li>
                Intellectual property rights, such as copyright, client usage
                rights and model releases
              </li>
              <li>Cancellation policy</li>
              <li>
                Signatures for all relevant parties (the photographer and each
                client)
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "contractsFaq4",
        header: "What makes a contract legally binding?",
        title:
          "A legally valid contract should include terms that specify what services and goods are being offered in exchange for specific consideration/compensation. The contract must document the acceptance of this offer.",
      },
      {
        id: "contractsFaq5",
        header: "How do I use the free templates?",
        title:
          "Lightfolio has over a dozen free contract templates covering wedding photography, second shooters, print releases and more. Simply select your template, identify your clients, customize the terms and then send it out for signing. It's convenient and all done easily online.",
      },
      {
        id: "contractsFaq6",
        header: "How do I get my contract signed?",
        title:
          "With Lightfolio, after you have completed drafting your contract, the document is sent to your client(s) by email where they can view your contract and legally sign online. Once the contract is signed by all parties, a PDF is created that you and your clients can save for your permanent record.",
      },
    ],
  };
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
              src="./folio images/documents-cover.jpg"
              className="img-fluid"
              alt="Document Cover"
            />
            <img
              src="./folio images/documents-cover-build.png"
              className="img1"
              alt="Cover Build"
            />
            <img
              src="./folio images/documents-cover-cover.png"
              className="img2"
              alt="Cover Add"
            />
            <img
              src="./folio images/documents-cover-invoice.png"
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 justify-content-center">
            {[
              {
                image: "./folio images/cover-preview-portrait-contract.jpg",
                header: "Portrait photography contract",
                title: "Family portraits, headshots, corporate clients",
              },
              {
                image: "./folio images/cover-preview-engagement-contract.jpg",
                header: "Engagement shoot contract",
                title: "Session agreements for couples",
              },
              {
                image: "./folio images/cover-preview-photo-release.jpg",
                header: "Print photo release",
                title: "Give clients limited usage and reproduction rights",
              },
              {
                image: "./folio images/cover-preview-wedding-contract.jpg",
                header: "Wedding photography contract",
                title:
                  "Contract terms for you and your bride and groom clients",
              },
              {
                image: "./folio images/cover-preview-boudoir-contract.jpg",
                header: "Boudoir photography contract",
                title: "An agreement for intimate shoots",
              },
              {
                image:
                  "./folio images/cover-preview-event-photography-contract.jpg",
                header: "Event photography contract",
                title: "A contract for your next booked event",
              },
              {
                image: "./folio images/cover-preview-commercial-contract.jpg",
                header: "Commercial photography contract",
                title: "An agreement for commercial clients",
              },
              {
                image: "./folio images/cover-preview-real-estate-contract.jpg",
                header: "Real estate photography contract",
                title: "Use a contract for property photography",
              },
              {
                image:
                  "./folio images/cover-preview-second-shooter-contract.jpg",
                header: "Second shooter contract",
                title: "Contract language for second shooters and assistants",
              },
              {
                image: "./folio images/cover-preview-photo-booth-contract.jpg",
                header: "Photo booth contract",
                title: "Sample contract for photo booth services",
              },
            ].map((content, index) => (
              <CrmAlbumGroup content={content} index={index} />
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
              src="./folio images/cover-page-3.jpg"
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
        <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0 ">
          <div className="col order-last order-md-first">
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
          <div className="col text-center order-first order-md-last">
            <img
              src="./folio images/invoice-2.gif"
              className="img-fluid w-75"
              alt="Invoice"
            />
          </div>
        </div>

        {/* Legally Binding */}
        <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0 paddingS">
          <div className="col text-center">
            <img
              src="./folio images/signature.gif"
              className="img-fluid w-75 imgShadow rounded"
              alt="Cover Page"
            />
          </div>
          <div className="col">
            <GridTextGroup
              subHeader={"Legally Binding"}
              headerColor={"grey"}
              header={"Confidently use online, legally binding documents"}
              title={
                "The use of online contracts and e-signatures is now quite commonplace. Lightfolio Documents fully adheres to national and international standards as outlined in laws such as the ESIGN and UETA Acts."
              }
              btnText={"Get Started"}
            />
          </div>
        </div>
        <div className="row justify-content-center paddingS">
          <div className="col-12 col-md-6 mb-3">
            <div className="vstack gap-2">
              <h6 className="colorBlack-600 textLabel">FAQ</h6>
              <h2>Questions about photography contracts?</h2>
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

      {/* Additional Features */}
      <section>
        <div className="container">
          <div className="featuresBg rounded py-4">
            <h4 className="fs-3 text-center mb-4">Additional Features</h4>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center align-items-center gap-3">
              {[
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Mobile friendly",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Building blocks",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: " Audit trail",
                },
                { icon: <IoIosCheckmarkCircleOutline />, title: "Client data" },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Unlimited signers",
                },
                { icon: <IoIosCheckmarkCircleOutline />, title: "Templates" },
                { icon: <IoIosCheckmarkCircleOutline />, title: "More" },
              ].map((content, index) => (
                <div key={content.title + index} className="col">
                  <div className="hstack gap-1 ">
                    <h4 className="mb-1 fs-5">{content.icon}</h4>
                    <h4 className="mb-0">{content.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contracts;
