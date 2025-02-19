import "./TextCard.scss";
import { Link } from "react-router-dom";

const TextCard = ({children, header, title}) => {
  return (
    <div className="d-flex textCardGroup">
      <h4 className="pt-2 px-4 textCardNumber">{children}</h4>
      <div className="ps-2 pe-2 textCardBody">
        <h3> <Link className="textCardLink colorBlack-100" >{header}</Link>
            </h3>
        <h5>
            <Link className="textCardLink colorBlack-500"> {title}</Link>
         
        </h5>
      </div>
    </div>
  );
};

export default TextCard;
