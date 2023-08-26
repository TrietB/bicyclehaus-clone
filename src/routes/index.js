import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShoppingPage from "../pages/ShoppingPage";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import SocialPage from "../pages/SocialPage";
import GalleryPage from "../pages/GalleryPage";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/haus-shop" element={<ShoppingPage />} />
        <Route path='social' element={<SocialPage/>}/>
        <Route path='gallery' element={<GalleryPage/>}/>
      </Route>
    </Routes>
  );
}

export default Router;
