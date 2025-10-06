import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./BookingSite.scss";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const BookingSite = () => {
  return (
    <>
      <section className="bookingOneSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
            <div className="col">
              <GridTextGroup
                subHeader={"Lightfolio Studio Manager"}
                header={"Booking Site for Photographers"}
                title={
                  "Book clients 24x7 with your own online booking platform."
                }
                btnText={"Get Started"}
                center={"center"}
              />
            </div>

            {/* pic col */}
            <div className="col">
              <img
                src="folio images/booking.jpg"
                className="img-fluid imgShadow rounded"
                alt="Booking"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bookingTwoSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
            {/* Text col */}
            <div className="col order-last order-md-first pe-md-4">
              <GridTextGroup
                subHeader={"Booking"}
                headerColor={"grey"}
                header={"Grow your photography business with online booking"}
                title={
                  "It's simple. Make it easy for clients to book your services. A full-featured, user-friendly booking site makes it harder for prospective clients to leave your website without booking a session."
                }
                btnText={""}
              />
            </div>

            {/* Pic col */}
            <div className="col order-first order-md-last">
              <div className="hstack beachImgGroup">
                <img
                  src="folio images/booking-beach-session.jpg"
                  className="img-fluid w-25"
                  alt="Beach"
                />
                <img
                  src="folio images/beach-shoot.jpg"
                  className="img-fluid rounded"
                  alt="Beach Shoot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bookingThreeSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
            {/* Text col */}
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Marketing & Sales"}
                headerColor={"grey"}
                header={"Customize your booking website"}
                title={
                  "Choose from multiple layout options and you'll be designing a booking site that matches your brand. Share your custom link on social media or directly with clients."
                }
                btnText={""}
                mainHeaderColor={"white"}
                titleColor={"white"}
              />
            </div>

            {/* Img col */}
            <div className="col order-first order-md-last">
              <div className="hstack bioLinkImgGroup ">
                <img
                  src="folio images/biolink-minis-1.jpg"
                  className="img-fluid"
                  alt="Biolink 1"
                />
                <img
                  src="folio images/biolink-minis-2.jpg"
                  className="img-fluid"
                  alt="Biolink 2"
                />
                <img
                  src="folio images/biolink-minis-3.jpg"
                  className="img-fluid"
                  alt="Biolink 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bookingFourSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* Img col */}
            <div className="col">
              <div className="hstack calenderImgGroup">
                <img
                  src="folio images/calendar.jpg"
                  className="img-fluid"
                  alt="Calender"
                />
                <img
                  src="folio images/photographer-phone.jpg"
                  className="img-fluid"
                  alt="Photographer"
                />
              </div>
            </div>

            {/* Text col */}
            <div className="col">
              <GridTextGroup
                subHeader={"Simplicity"}
                headerColor={"grey"}
                header={"Easy bookings for you and your clients"}
                title={
                  "Eliminate the back and forth emails by setting up availability rules that work for you. Specify business hours, limit maximum bookings and more. Scheduling shouldn't be complicated. Lightfolio makes it easy."
                }
                btnText={"Get Started"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bookingFiveSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* Text col */}
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Power Up"}
                headerColor={"grey"}
                header={"Booking Versatility"}
                title={
                  "It can be as simple as having your client choose a date and time. Do you require a contract, payment or questionnaire when booking a photoshoot? We have you covered. Book sessions or schedule client meetings, in whatever way works for you."
                }
                btnText={"Get Started"}
              />
            </div>

            {/* Img col */}
            <div className="col order-first order-md-last">
              <div className="hstack text-center bookingPowerupGroup">
                <div>
                  <img
                    src="folio images/booking-versatility-form.jpg"
                    className="img-fluid"
                    alt="Booking Form"
                  />
                  <p>Questionnaire</p>
                </div>
                <div>
                  <img
                    src="folio images/booking-versatility-cover.jpg"
                    className="img-fluid"
                    alt="Booking Cover"
                  />
                  <p>Contract</p>
                </div>
                <div>
                  <img
                    src="folio images/booking-versatility-invoice.jpg"
                    className="img-fluid"
                    alt="Booking Invoice"
                  />
                  <p>Invoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bookingSixSection">
        <div className="container">
          <div className="featuresBg rounded py-4">
            <h4 className="fs-3 text-center mb-4">Additional Features</h4>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center align-items-center gap-3">
              {[
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Mobile friendly",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Real-time notifications",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Time buffers",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Blackout dates",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Scheduling by job type",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Online payments",
                },
                {
                  icon: <IoIosCheckmarkCircleOutline />,
                  title: "Gallery integration",
                },
              ].map((content, index) => (
                <div key={content.title + index} className="col">
                  <div className="hstack gap-1 ">
                    <h4 className="mb-1 fs-5">{content.icon}</h4>
                    <h4 className="mb-0">{content.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSite;
