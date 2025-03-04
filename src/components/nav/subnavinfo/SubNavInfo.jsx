import "./SubNavInfo.scss";



const SubNavInfo = ({icon, header, title}) => {
  return (
    <>
      <div className="d-flex mainGroup">
        <div className="icon">
          {icon}
        </div>
        <div className="textGroup ms-2">
          {header} <br /> <p className="mt-1">{title}</p>
        </div>
      </div>
    </>
  );
};

export default SubNavInfo;
