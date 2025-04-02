import GridTextGroup from '../../gridTextGroup/GridTextGroup'
import './Forms.scss'

const Forms = () => {
  return (
    <>
     <section className="formsFirstSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 justify-content-center align-items-center gap-4 gap-sm-0">
            <div className="col order-last order-sm-first">
              <GridTextGroup
                subHeader={"Lightfolio Studio Manager"}
                header={
                  <>
                    Invoices for
                    <br /> Photographers
                  </>
                }
                title={
                  "Draft, design and send elegant photography invoices to your clients, all online."
                }
                btnText={"Get Started"}
              />
            </div>

            {/* Picture */}
            <div className="col order-first order-sm-last">
              <div className="imgPosition">
                <div className="hstack imgGroup">
                  <img
                    src="/public/folio images/invoice-items.gif"
                    className="img-fluid"
                    alt="Invoice"
                  />
                  <img
                    src="/public/folio images/16addb3a-8549-4fdb-ab10-3dbadcb7bc13.jpg"
                    className="img-fluid"
                    alt="Bride"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Forms