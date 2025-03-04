import { Link } from "react-router-dom";
import "./Galleries.scss";
const Galleries = () => {
  return (
    <>
      <div className="container">
        <div className="text-center vstack align-items-center gap-4">
          <h2>Client Galleries - Feature List</h2>
          <h4 className="w-75 colorBlack-500">
            Lightfolio is a fully featured, <Link to={'/'} className="colorBlack-100">online photo gallery</Link> online photo gallery platform that
            provides multiple configuration options and allows for advanced
            customization.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Galleries;
