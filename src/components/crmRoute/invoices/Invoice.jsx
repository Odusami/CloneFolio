import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import CrmAlbumGroup from "../contracts/crmAlbumGroup/CrmAlbumGroup";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Invoice.scss";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcPaypal,
  FaCreditCard,
} from "react-icons/fa";

const Invoice = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/public/folio images/invoice-cover-wedding.jpg",
    "/public/folio images/invoice-white.gif",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="invoiceFirstSection">
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

      <section className="invoiceSecondSection paddingS">
        <div className="container">
          <div className="vstack text-center gap-4 px-lg-5 mb-5">
            <h2>Invoice Templates for Photographers</h2>
            <h4>
              Get starting by using any of our modern invoice templates.
              Customize images, colors and designs to your hearts content. Send
              it to your client and allow them to pay online.
            </h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 justify-content-center">
            {[
              {
                image: "/public/folio images/Invoice1.jpg",
                header: "Wedding Photography Invoice",
                title:
                  "Summarize all costs for your bride and groom and get paid online",
              },
              {
                image: "/public/folio images/Invoice2.jpg",
                header: "Event Photography Invoice",
                title:
                  "Itemize each service, product and fee for your event photography",
              },
              {
                image: "/public/folio images/Invoice3.jpg",
                header: "Portrait Photography Invoice",
                title:
                  "Create a uniquely designed invoice for each of your portrait clients",
              },
              {
                image: "/public/folio images/Invoice4.jpg",
                header: "Commercial Photography Invoice",
                title: "Bill commercial clients and collect payment online",
              },
              {
                image: "/public/folio images/Invoice5.jpg",
                header: "Food Photography Invoice",
                title:
                  "Pair your food photography with a matching bespoke invoice",
              },
              {
                image: "/public/folio images/Invoice6.jpg",
                header: "Freelance Photography Invoice",
                title: "Keep track of every bill for your freelance clients",
              },
              {
                image: "/public/folio images/Invoice7.jpg",
                header: "Photo Shoot Invoice",
                title: "Design an invoice for any type of photo shoot",
              },
              {
                image: "/public/folio images/Invoice8.jpg",
                header: "Real Estate Photography Invoice",
                title:
                  "Bill your customers with an invoice made for real estate photography",
              },
              {
                image: "/public/folio images/Invoice9.jpg",
                header: "Sample Photography Invoice",
                title:
                  "From basic to completely customized, the choice is yours",
              },
              {
                image: "/public/folio images/Invoice9.jpg",
                header: "Simple Photography Invoice",
                title:
                  "Create the perfect invoice that gets straight to the point",
              },
            ].map((content, index) => (
              <CrmAlbumGroup content={content} index={index} />
            ))}
          </div>

          {/* 6 by 6 */}
          <div className="paddingS">
            <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
              <div className="col order-last order-md-first">
                <GridTextGroup
                  subHeader={"Installments"}
                  headerColor={"grey"}
                  header={"Create custom payment schedules"}
                  title={
                    "Give your clients the option to pay their photography invoices in installments. Easily create a schedule with due dates and amounts of your choosing. For example, collect an initial deposit and then split the remaining balance into two more, even payments."
                  }
                  btnText={""}
                />
              </div>
              <div className="col my-auto order-first order-md-last">
                <div className="paymentGroup m-auto">
                  <div className="hstack paymentItems">
                    <div className="hstack align-items-start">
                      <IoIosCheckmarkCircle size={35} className="icon me-4" />
                      <div>
                        <h4>Booking fee</h4>
                        <p>March 15</p>
                      </div>
                    </div>
                    <div>
                      <h4>$100.00</h4>
                      <p className="text-end status">PAID</p>
                    </div>
                  </div>
                  {/* payment1 */}
                  <div className="hstack paymentItems">
                    <div className="hstack align-items-start">
                      <IoIosCheckmarkCircleOutline
                        size={35}
                        className="icon1 me-4"
                      />
                      <div>
                        <h4>Balance payment 1</h4>
                        <p>July 1</p>
                      </div>
                    </div>
                    <div>
                      <h4>$350.00</h4>
                      <p className="opacity-0">.</p>
                    </div>
                  </div>
                  {/* payment2 */}
                  <div className="hstack paymentItems noBorder">
                    <div className="hstack align-items-start">
                      <IoIosCheckmarkCircleOutline
                        size={35}
                        className="icon1 me-4"
                      />
                      <div>
                        <h4>Balance payment 2</h4>
                        <p>August 1</p>
                      </div>
                    </div>
                    <div>
                      <h4>$250.00</h4>
                      <p className="opacity-0">.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 by 6 */}
          <div>
            <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
              <div className="col text-center">
                <div className="px-2">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={images[currentImage]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeInOut }}
                      className="img-fluid imgShadow w-75"
                      alt={`Image ${currentImage + 1}`}
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* 6 by 6 */}
              <div className="col">
                <GridTextGroup
                  subHeader={"Custom Design"}
                  headerColor={"grey"}
                  header={"Align your invoices with your brand"}
                  title={
                    <>
                      {" "}
                      Take your invoice to the next level by adding a cover page
                      . Further customize your invoice by choice custom colors
                      and designs.
                      <br />
                      <br />A well crafted brand increases your perceived value.
                    </>
                  }
                  btnText={"Get Started"}
                />
              </div>
            </div>
          </div>

          {/* 6 by 6 */}
          <div className="paddingS ">
            <div className="row row-cols-1 row-cols-md-2 gap-2 gap-md-0 ">
              <div className="col order-last order-md-first">
                <GridTextGroup
                  subHeader={"Online Payments"}
                  headerColor={"grey"}
                  header={"Conveniently collect payments online"}
                  title={
                    "Make it easy for your clients to pay you. By connecting to your payment gateway (we support Stripe and PayPal), your clients can make payments against your invoices by credit or debit card."
                  }
                  btnText={"Get Started"}
                />
              </div>

              {/* 6 by 6 */}
              <div className="col order-first order-md-last text-center">
                <div className="cardPaymentGroup">
                  <div className="cardImage">
                    <img
                      src="/public/folio images/cc-mastercard.jpg"
                      className="img-fluid"
                      alt="Mastercard"
                    />
                  </div>
                  <div className="iconGroup">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcDiscover />
                    <FaCreditCard />
                    <FaCcPaypal />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6 by 6 */}
          <div className="contractInvoice">
            <div className="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
              <div className="col ">
                <div className="cInvoiceGroup ">
                  <div className="hstack imgGroup ">
                    <img
                      src="/public/folio images/contract-wedding.gif"
                      className=""
                      alt="Wedding Contract"
                    />
                    <img
                      src="/public/folio images/invoice-wedding.gif"
                      className=""
                      alt="Wedding invoice"
                    />
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div className="col">
                <GridTextGroup
                  subHeader={"Contract Integration"}
                  headerColor={"grey"}
                  header={"Send contracts and photography invoices together"}
                  title={
                    "Collecting payments are key, but so is agreeing to terms in writing. Contracts protect both you and your clients and reduce any confusion in any agreement. You can send online contracts that include an invoice. Get a signature and get paid, all at the same time."
                  }
                  btnText={'Get Started'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
