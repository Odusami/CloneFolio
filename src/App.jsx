import { Route, Link, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
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
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Nav />}

      {/* <Home/> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />}>
          <Route index element={<Navigate to="client-gallery" replace />} />
          <Route path="client-gallery" element={<ClientGallery />} />
          <Route path="studio-manager" element={<StudioManager />} />
          <Route path="website" element={<Websites />} />
          <Route path="bundle" element={<Bundles />} />
        </Route>
      
          <Route path="/gallery" element={<GalleryRoute />}>
            <Route index element={<Galleries />} />
            <Route path="proofing" element={<Proofing />}/>
            <Route path="digital-download" element={<DigitalDownloads />} />
            <Route path="visitor-analysis" element={<GalleryVisitors />}/>
            <Route path="online-store" element={<GalleryStore />}/>
            <Route path="directories" element={<GalleryDirectories />}/>
            <Route path="themes" element={<Themes />}/>
          </Route>
          <Route path="/fonts" element={<Fonts />}/>
          <Route path="/lightroom" element={<Lightroom />}/>
          <Route path="/supported-file-types" element={<FileTypes />}/>
         
         <Route path="/crm" element={<CrmRoute />}>
          <Route index element={<Crm />}/>

         </Route>
        
      </Routes>

      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
