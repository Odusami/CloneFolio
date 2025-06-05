import {
  Route,
  Link,
  Routes,
  useLocation,
  ScrollRestoration,
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import SubNavInfo from "./components/nav/subnavinfo/SubNavInfo";
import Pricing from "./components/pricing/Pricing";
import ClientGallery from "./components/pricing/clientGallery/ClientGallery";
import StudioManager from "./components/pricing/studioManager/StudioManager";
import { Navigate } from "react-router-dom";
import Websites from "./components/pricing/website/Websites";
import Bundles from "./components/pricing/bundles/Bundles";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/home/footer/Footer";
import Galleries from "./components/galleryRoute/galleries/Galleries";
import DigitalDownloads from "./components/galleryRoute/galleries/digitalDownloads/DigitalDownloads";
import GalleryRoute from "./components/galleryRoute/GalleryRoute";
import GalleryVisitors from "./components/galleryRoute/galleries/galleryVisitors/GalleryVisitors";
import GalleryStore from "./components/galleryRoute/galleries/galleryStore/GalleryStore";
import GalleryDirectories from "./components/galleryRoute/galleries/galleryDirectories/GalleryDirectories";
import Themes from "./components/galleryRoute/galleries/themes/Themes";
import Fonts from "./components/fonts/Fonts";
import Lightroom from "./components/lightroom/Lightroom";
import FileTypes from "./components/fileTypes/FileTypes";
import Proofing from "./components/proofing/Proofing";
import CrmRoute from "./components/crmRoute/CrmRoute";
import Crm from "./components/crmRoute/crm/Crm";
import Contracts from "./components/crmRoute/contracts/Contracts";
import Invoice from "./components/crmRoute/invoices/invoice";
import BookingSite from "./components/crmRoute/bookingSite/BookingSite";
import MiniSession from "./components/crmRoute/miniSession/MiniSession";
import Forms from "./components/crmRoute/forms/Forms";
import WebsitePage from "./components/website/WebsitePage";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/animation/PageTransition";
function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <PageTransition >
      {(handleNavigation) => (
        <>
      {location.pathname !== "/" && <Nav handleNavigation={handleNavigation} />}
      <AnimatePresence mode="wait">
      {/* <Home/> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home handleNavigation={handleNavigation}/>} />
        <Route path="/pricing" element={<Pricing />}>
          <Route index element={<Navigate to="client-gallery" replace />} />
          <Route path="client-gallery" element={<ClientGallery />} />
          <Route path="studio-manager" element={<StudioManager />} />
          <Route path="website" element={<Websites />} />
          <Route path="bundle" element={<Bundles />} />
        </Route>

        <Route path="/gallery" element={<GalleryRoute />}>
          <Route index element={<Galleries handleNavigation={handleNavigation}/>} />
          <Route path="proofing" element={<Proofing />} />
          <Route path="digital-download" element={<DigitalDownloads />} />
          <Route path="visitor-analytics" element={<GalleryVisitors />} />
          <Route path="online-store" element={<GalleryStore />} />
          <Route path="directories" element={<GalleryDirectories />} />
          <Route path="themes" element={<Themes />} />
        </Route>
        <Route path="/fonts" element={<Fonts />} />
        <Route path="/lightroom" element={<Lightroom />} />
        <Route path="/supported-file-types" element={<FileTypes />} />

        <Route path="/crm" element={<CrmRoute />}>
          <Route index element={<Crm handleNavigation = {handleNavigation}/>} />
          <Route path="contract" element={<Contracts />} />
          <Route path="invioce" element={<Invoice />} />
          <Route path="booking" element={<BookingSite />} />
          <Route path="session" element={<MiniSession handleNavigation={handleNavigation}/>} />
          <Route path="form" element={<Forms />} />
        </Route>

        <Route path="websites" element={<WebsitePage handleNavigation={handleNavigation}/>} />
      </Routes>
      </AnimatePresence>

      {location.pathname !== "/" && <Footer handleNavigation={handleNavigation}/>}
      </>
      )}
      </PageTransition>
    </>

  );
}

export default App;
