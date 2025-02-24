import { Route, Link, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/home/Home";
import SubNavInfo from "./components/nav/subnavinfo/SubNavInfo";
import Pricing from "./components/pricing/Pricing";
import ClientGallery from "./components/pricing/clientGallery/ClientGallery";
import StudioManager from "./components/pricing/studioManager/StudioManager";
import { Navigate } from "react-router-dom";
import Websites from "./components/pricing/website/Websites";
import Bundles from "./components/pricing/bundles/Bundles";
function App() {
  return (
    <>
      {/* <Nav/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />}>
          <Route index element={<Navigate to="client-gallery" replace />} />
          <Route path="client-gallery" element={<ClientGallery />} />
          <Route path="studio-manager" element={<StudioManager />} />
          <Route path="website" element={<Websites />} />
          <Route path="bundle" element={<Bundles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
