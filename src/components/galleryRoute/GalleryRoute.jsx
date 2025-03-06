import React from "react";
import Galleries from "./galleries/Galleries";
import { Outlet, Route, Routes } from "react-router-dom";

const GalleryRoute = () => {
  return (
    <div>
      {/* <Galleries /> */}
      <Outlet />
    </div>
  );
};


export default GalleryRoute;
