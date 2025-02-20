import ClientGallery from "./clientGallery/ClientGallery";
import "./Pricing.scss";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
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
        <ul class="nav justify-content-center ">
          <div className="hstack gap-4">

          <li class="nav-item">
            <Link
              to={"/client-gallery"}
              class="pricingLink"
              aria-current="page"
            >
              Client Galleries
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to={"/studio-manager"}
              class="pricingLink"
            >
              Studio Manager
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/website"} class="pricingLink">
              Websites
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/bundle"} class=" pricingLink">
              Bundles
            </Link>
          </li>
          </div>
        </ul>
      </div>
      <ClientGallery/>
    </>
  );
};

export default Pricing;
