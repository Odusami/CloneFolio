import "./GridTextGroup.scss";
import { useNavigate } from "react-router-dom";

const GridTextGroup = ({
  headerColor,
  btnColor,
  subHeader,
  header,
  title,
  btnText,
  center,
  mainHeaderColor,
  titleColor,
  refLink,
  navClick
}) => {
    const navigate = useNavigate();
  
  const align = center === "center" ? "text-center" : "";

  const headerStyle =
    headerColor === "grey"
      ? "colorBlack-600 textLabel text-uppercase"
      : "colorTertiary textLabel fw-semibold";

  const mainHeaderStyle =
    mainHeaderColor === "white" ? "colorWhite mb-4 mt-2" : "mb-4 mt-2";
  const btnStyle = btnColor === "grey" ? "textBtn" : "mainBtn";

  const titleStyle = titleColor === 'white'
  ? 'colorBlack-600 lh-base mb-4 pt-1'
  : 'lh-base mb-4 pt-1'

  const emptyBtn = btnText !== "" ? btnStyle : "d-none";

  return (
    <>
      <div className={align}>
        <h6 className={headerStyle}>{subHeader}</h6>
        <h2 className={mainHeaderStyle}>{header}</h2>
        <h4 className={titleStyle}>{title}</h4>
        <button  
        onClick={(e)=> {navigate(refLink);
          navClick && navClick (e, refLink)
        }} 
        className={emptyBtn}>{btnText}</button>
      </div>
    </>
  );
};

export default GridTextGroup;
