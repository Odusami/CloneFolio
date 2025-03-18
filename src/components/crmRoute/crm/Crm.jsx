import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./Crm.scss";

const Crm = () => {
  return (
    <>
      <section>
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
              src="/public/folio images/dashboard-5.jpg"
              className="img-fluid"
              alt="Crm Dashboard"
            />
          </div>

          {/* Lightfolio Studio Manager Grid */}
          <h3 className="text-center fs-4 colorBlack my-5 fw-medium">Lightfolio Studio Manager helps you:</h3>
          <div className="row">
            <div className="col-3">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">

                <h4 className="numBg">1</h4>
                </div>
                <h5 className="colorBlack">
                  <span className="fw-bold">Book more clients</span><br />
                  Build a powerful, customized booking platform that gives you
                  and your clients everything needed to close deals faster.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col-3">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">

                <h4 className="numBg">2</h4>
                </div>
                <h5 className="colorBlack">
                  <span className="fw-bold">Elevate your brand</span><br />
                  Every interaction with a client communicates the value of your brand. Use our premium platform to communicate your worth.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col-3">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">

                <h4 className="numBg">3</h4>
                </div>
                <h5 className="colorBlack">
                  <span className="fw-bold">Get organized, get stuff done</span><br />
                  Have your hands full getting contracts signed, collecting payments and staying on top of your schedule? It's time to use a CRM built for photographers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crm;
