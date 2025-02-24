import ClientGallery from "./clientGallery/ClientGallery";
import "./Pricing.scss";
import { NavLink, Outlet } from "react-router-dom";
import StudioManager from "./studioManager/StudioManager";
import Websites from "./website/Websites";
import Bundles from "./bundles/Bundles";

const faq = {
  id: "faqPricing",
  header: "Frequently Asked Questions",
  content1: {
    header: "Hows does the free account work?",
    title:
      "Creating your free account gives you access to most every feature. Your account is free for life--upgrade to any paid plan for more storage.",
  },
  content2: {
    header: "Am I required to sign a contract?",
    title: "Absolutely not. Every plan is available on a month-to-month basis.",
  },
  content3: {
    header: "How do I change or cancel my subscription?",
    title:
      "You can easily upgrade, change and cancel your plan at any time. There is no lock and no obligation beyond the monthly fee.",
  },
  content4: {
    header: "Do you charge sales commission fees?",
    title:
      "Most paid plans have no commission. The free plan charges a 15% fee only if and when you make a sale.",
  },
  content5: {
    header: "I have a question--how do I contact support?",
    title:
      "We are always happy to help. Please feel free to email us at hello@clonefolio.com.",
  },
};
const Pricing = () => (
  <>
    <div className="pricingMainHeadBody">
      <div className="container text-center">
        <h2 className="colorWhite">
          Modern software solutions for photography studios
        </h2>
        <h4 className="colorBlack-500 mt-3">
          Get started for free. Upgrade only when needed.
        </h4>
      </div>
    </div>

    <div className="container py-4">
      <ul className="nav justify-content-center ">
        <div className="hstack gap-4">
          <li class="nav-item">
            <NavLink to={"client-gallery"} className={({ isActive }) => (isActive ? "activepriceLink pricingLink" : "pricingLink")}>
              Client Galleries
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"studio-manager"} className={({ isActive }) => (isActive ? "activepriceLink pricingLink" : "pricingLink")}>
              Studio Manager
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"website"} className={({ isActive }) => (isActive ? "activepriceLink pricingLink" : "pricingLink")}>
              Websites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"bundle"} className={({ isActive }) => (isActive ? "activepriceLink pricingLink" : "pricingLink")}>
              Bundles
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
    {/* <ClientGallery/> */}
    {/* <StudioManager/> */}
    {/* <Websites/> */}
    {/* <Bundles /> */}
    <section>
      <Outlet />
    </section>

    <div className="container py-5">
      <div className="vstack align-items-center">
        <h2 className="">{faq.header}</h2>
        <p className="line my-4 "></p>
      </div>
      <div className="row justify-content-center gap-2">
        <div className="col-10 col-md-4 p-2 px-lg-4">
          <div className="vstack">
            <h4 className="fw-medium">{faq.content1.header}</h4>
            <h5 className="font1 colorBlack-300 ">{faq.content1.title}</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 p-2 px-lg-4">
          <h4 className="fw-medium">{faq.content2.header}</h4>
          <h5 className="font1 colorBlack-300 ">{faq.content2.title}</h5>
        </div>
        <div className="col-10 col-md-4 p-2 px-lg-4">
          <h4 className="fw-medium">{faq.content3.header}</h4>
          <h5 className="font1 colorBlack-300 ">{faq.content3.title}</h5>
        </div>
        <div className="col-10 col-md-4 p-2 px-lg-4">
          <h4 className="fw-medium">{faq.content4.header}</h4>
          <h5 className="font1 colorBlack-300 ">{faq.content4.title}</h5>
        </div>
        <div className="col-10 col-md-4 p-2 px-lg-4">
          <h4 className="fw-medium">{faq.content5.header}</h4>
          <h5 className="font1 colorBlack-300 ">{faq.content5.title}</h5>
        </div>
      </div>
    </div>
  </>
);

export default Pricing;
