import { Link, useLocation } from "react-router-dom";
import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./MiniSession.scss";
import Faq from "../../home/faq/Faq";

const MiniSession = ({ handleNavigation }) => {
  const location = useLocation();

  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // Prevent ripple if already on the target page
    if (location.pathname === path) {
      e.preventDefault();
      return;
    }
    handleNavigation(e, path);
  };
  const faqData = {
    id: "miniSessionFaq",
    content: [
      {
        id: "miniSessionFaq1",
        header: "What are mini sessions?",
        title:
          "It's exactly what it sounds like--a normal photo session, but just smaller. They're usually shorter in length (typically 15-30 minutes) and the offerings, in terms of prints, products, downloads, etc may be less than a normal, full-blown photo session. They also tend to revolve around a theme, such as boudoir, Christmas, fall, spring, etc. It's a great way to bring on new clients or to fill in otherwise slower periods in your calendar.",
      },
      {
        id: "miniSessionFaq2",
        header: "How do I offer mini sessions?",
        title:
          "The easiest way is to set up a booking site. There, you can establish the dates and times you will offer your sessions. You can set pricing, packages, contracts terms and collect payment, all online. Once everything is set, use social media to share the link with your clients/followers.",
      },
      {
        id: "miniSessionFaq3",
        header: "How do I share my sessions?",
        title:
          "Each mini session you create will have its own unique booking URL that you can share with clients. Or you can share the link to your photo booking app, which will list all your published mini sessions.",
      },
      {
        id: "miniSessionFaq4",
        header:
          "While on the free plan, do I have access to all features on the paid plans?",
        title:
          "Yes, you get access to every feature. The free tier simply limits the number of sessions you can book. Just upgrade when you need to book more sessions.",
      },
      {
        id: "miniSessionFaq5",
        header: "Can I change a clients assigned session?",
        title:
          "Yes, if you or your client need to make a change, it is easy to assign your client to a different start time.",
      },
      {
        id: "miniSessionFaq6",
        header: "Can I use Lightfolio to book workshops or classes?",
        title:
          "You can use Lightfolio mini sessions to book spots in your class or workshop. Setting up your event is as simple as enabling a single setting.",
      },
      {
        id: "miniSessionFaq7",
        header: "Do I need a website to book mini sessions?",
        title:
          "You do not. You can use our customizable photo booking platform to handle every aspect of online booking.",
      },
      {
        id: "miniSessionFaq8",
        header: "Can I use Lightfolio to share my mini session images?",
        title:
          "Yes. You can use our booking session to book minis, but you can also use our online photo galleries to share, sell and deliver images with your clients.",
      },
      {
        id: "miniSessionFaq9",
        header: "If I upgrade to a paid plan, can I cancel anytime?",
        title:
          "Absolutely. There is no contract, and you can upgrade or downgrade at any time. All subscription changes are self-service within the app--no need to email support.",
      },
    ],
  };
  return (
    <>
      <section className="miniSessionFirst">
        <div className="container">
          <div className="row gap-4 gap-md-0">
            {/* Text col */}
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Lightfolio Studio Manager"}
                header={"Mini Session Photography"}
                title={
                  "Booking mini sessions online is now easier than ever. We have all the tools to get you started. Grow your client base and revenue today."
                }
                btnText={"Get Started"}
              />
            </div>

            {/* Img Col */}
            <div className="col-md-7 ps-md-5 order-first order-md-last">
              <img
                src="folio images/mini Session.jpg"
                className="img-fluid rounded imgShadow"
                alt="Mini Section"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="miniSessionSecond">
        <div className="container">
          <div className="col-12 col-md-10">
            <GridTextGroup
              subHeader={"Inspiration"}
              headerColor={"grey"}
              header={"15+ Mini Session Ideas"}
              title={
                <>
                  Why shoot Mini Sessions? One, they're great to offer anytime
                  you have a gap in your calendar. And two, it's an ideal way to
                  bring in new clients (minis are low investment and low risk)
                  and start a relationship for bigger shoots down the road.
                  <br />
                  <br />
                  In the articles linked below, 20 working photographers share
                  tips and tricks you can use for your next mini.
                </>
              }
              btnText={""}
            />
          </div>
          {/* Grid Mini Session */}
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 justify-content-center">
            {[
              {
                image: "folio images/mini1.jpg",
                title: "Christmas Mini Sessions",
              },
              {
                image: "folio images/mini2.jpg",
                title: "Fall Mini Sessions",
              },
              {
                image: "folio images/mini3.jpg",
                title: "Boudoir Mini Sessions",
              },
              {
                image: "folio images/mini4.jpg",
                title: "4th Of July Mini Sessions",
              },
              {
                image: "folio images/mini5.jpg",
                title: "Easter Mini Sessions",
              },
              {
                image: "folio images/mini6.jpg",
                title: "Family Mini Sessions",
              },
              {
                image: "folio images/mini7.jpg",
                title: "Father's Day Mini Sessions",
              },
              {
                image: "folio images/mini8.jpg",
                title: "Glitter Mini-Session",
              },
              {
                image: "folio images/mini9.jpg",
                title: "Halloween Mini Sessions",
              },
              {
                image: "folio images/mini10.jpg",
                title: "Hot Cocoa Mini Sessions",
              },
              {
                image: "folio images/mini11.jpg",
                title: "Lemonade Stand Mini Sessions",
              },
              {
                image: "folio images/mini12.jpg",
                title: "Mommy & Me Mini Sessions",
              },
              {
                image: "folio images/mini13.jpg",
                title: "Pet Mini Sessions",
              },
              {
                image: "folio images/mini14.jpg",
                title: "Spring Mini Sessions",
              },
              {
                image: "folio images/mini15.jpg",
                title: "Summer Mini Sessions",
              },
              {
                image: "folio images/mini16.jpg",
                title: "Tree Farm Mini Sessions",
              },
              {
                image: "folio images/mini17.jpg",
                title: "Valentine's Day Mini Session",
              },
            ].map((content, index) => (
              <div key={content.title + index} className="col mb-4">
                <div className="contentContainer">
                  <img
                    src={content.image}
                    className="img-fluid rounded"
                    alt={content.title}
                  />
                  <h4 className="mt-1 fw-semibold">{content.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="miniSessionThird paddingS">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 ">
              <GridTextGroup
                subHeader={"Growth"}
                headerColor={"grey"}
                header={"Make booking mini sessions easy"}
                title={
                  "The thing with mini sessions is that they're a lot of work to book. Endless, back-and-forth emails, calls and texts. But, not if you're using a booking platform built for mini-sessions. You set up your session, share the link and now booking all those spots is on autopilot. It's practically effortless."
                }
                btnText={"Get Started"}
                center={"center"}
              />
            </div>
          </div>

          <div className="row gridContainer align-items-center center justify-content-center text-center gap-5 gap-sm-0">
            <div className="col-12 col-sm">
              <div>
                <img
                  src="folio images/booking-minis-biolink.jpg"
                  className="img-fluid miniImgs"
                  alt="Biolink"
                />
                <h5>
                  <span>1</span> Share biolink
                </h5>
              </div>
            </div>

            <div className="col-1 d-none d-lg-block p-0">
              <img
                src="folio images/arrow-top.png"
                className="img-fluid"
                alt="Arrow top"
              />
            </div>

            <div className="col-12 col-sm">
              <div>
                <img
                  src="folio images/booking-minis-calendar.jpg"
                  className="img-fluid miniImgs"
                  alt="Calender"
                />
                <h5>
                  <span>2</span> Pick a session
                </h5>
              </div>
            </div>

            <div className="col-1 d-none d-lg-block p-0">
              <img
                src="folio images/arrow-bottom.png"
                className="img-fluid"
                alt="Arror bottom"
              />
            </div>

            <div className="col-12 col-sm">
              <div>
                <img
                  src="folio images/booking-minis-confirmation.jpg"
                  className="img-fluid miniImgs"
                  alt="Booking Confirmed"
                />
                <h5>
                  <span>3</span> Booking Confirmed!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="miniSessionForth">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
            {/* Text col */}
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Biolink"}
                headerColor={"grey"}
                header={"Mobile ready mini session photography"}
                title={
                  "Now that you have your minis on the calendar, it's time to book clients. Set up your custom biolink, share it on all of your social media platforms and now you're ready to book clients. All online, 24x7."
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

      <section className="miniSessionFifth">
        <div className="container">
          <div className="col-12 col-md-8 col-lg-6">
            <h6 className="text-uppercase textLabel">Features</h6>
            <h2>Additional session features</h2>
          </div>

          {/* Features Grid */}
          <div className="row row-cols-1 row-cols-md-2 mt-3">
            {[
              {
                image: "folio images/mini-sessions-contracts.jpg",
                header: "Attach a Contract",
                title:
                  "Need to make your booking legally binding? Easily add a contract as a requirement for booking. Add contract terms that spell out the details of the shoot, deliverables, contingencies and more.",
                path: "/crm/contract",
              },
              {
                image: "folio images/mini-sessions-gallery-integration.jpg",
                header: "Gallery Integration",
                title:
                  "You've used our photography CRM to book your session. After the shoot, use Lightfolio online galleries to deliver your photos. Everything in one platform--it's easier for you and for your clients.",
                path: "/crm",
              },
              {
                image: "folio images/mini-sessions-payments.jpg",
                header: "Collect Payment On/Off-line",
                title:
                  "How you choose to collect payments for your booking is up to you. Require clients to make a payment online as part of the booking process or let your clients pay you outside of Lightfolio.",
                path: "/crm/invioce",
              },
              {
                image: "folio images/mini-sessions-confirmation.jpg",
                header: "Require Payment for Booking",
                title:
                  "Booking a session is more than just picking a time slot. You can require clients to either pay in full or make a partial payment to officially reserve their spot. Accept online payments via credit card or PayPal.",
                path: "/crm/booking",
              },
              {
                image: "folio images/mini-sessions-reminders.jpg",
                header: "Automated Client Reminders",
                title:
                  "Let Lightfolio be your virtual assistant. We can remind your clients of an upcoming shoot, upcoming payment or a past due payment. You set up the message and the schedule. We automate the delivery.",
                path: "/crm",
              },
              {
                image: "folio images/mini-sessions-notifications.jpg",
                header: "Real-time notifications",
                title:
                  "Every important activity in our booking system results in a notification email sent out to you. Be notified in real-time when book another session or receive an online payment.",
                path: "/crm",
              },
              {
                image: "folio images/mini-sessions-questionnaires.jpg",
                header: "Add a Questionnaire",
                title:
                  "Need a little information from each of your clients? Create a customized questionnaire to collect contact information, learn about their preferences, expectations and more. They'll be able to complete the form as part of the booking process.",
                path: "/crm",
              },
              {
                image: "folio images/mini-sessions-bookings.jpg",
                header: "Prevent double bookings",
                title:
                  "Once a client picks a time slot, that session is reserved for them. They'll have 15 minutes to complete the session booking process. After that, the session is open back up to the public.",
                path: "/crm/booking",
              },
              {
                image: "folio images/mini-sessions-bookings.jpg",
                header: "Works on any device",
                title:
                  "Booking mini sessions couldn't be easier. Clients can learn about your services, pick a time slot from your available schedule and secure their preferred spot. Clients can book on their phone, tablet or computer.",
                path: "/crm/booking",
              },
            ].map((content, index) => (
              <div
                key={content.header + index}
                className="col mb-5 px-md-4 px-lg-5"
              >
                <div className="w-50">
                  <img
                    src={content.image}
                    className="img-fluid"
                    alt={content.header}
                  />
                </div>
                <h4 className="fs-4 mt-4">{content.header}</h4>
                <h4 className="colorBlack-500 lh-base mt-4">{content.title}</h4>
                <div className="mt-5">
                  <Link
                    to={content.path}
                    onClick={(e) => handleNavClick(e, content.path)}
                    className="mainBtn"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="miniSessionSixth paddingS">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-3">
              <div className="vstack gap-2">
                <h6 className="colorBlack-600 textLabel">FAQ</h6>
                <h2>
                  Mini session
                  <br /> questions?
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Faq faqData={faqData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniSession;
