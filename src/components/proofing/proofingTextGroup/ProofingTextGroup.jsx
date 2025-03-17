import "./ProofingTextGroup.scss";

const ProofingTextGroup = ({number, header, title}) => {
  return (
    <>
      <h5 className="fw-bold font1 mb-0 colorBlack-100 d-flex align-items-center justify-content-center mb-1 ">
        {" "}
        <span className="bg-dark colorWhite proofingSpanCirleBg me-1">
          {number}
        </span>{" "}
        {header}
      </h5>
      <p className="colorBlack-500">
       {title}
      </p>
    </>
  );
};

export default ProofingTextGroup;
