import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./pages/HomeSection";
import Footer from "../components/Footer";
import EngineHeader from "../i3m-engine/components/Header";
import EngineHomeSection from "../i3m-engine/pages/HomeSection";
import ProductPage from "../i3m-engine/pages/ProductPage";
import SolutionPage from "../i3m-engine/pages/SolutionPage";

const NewWebsiteApp = () => {
  return (
    <>
      <EngineHeader />
      <Routes>
        <Route path="/" element={<EngineHomeSection />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="solution" element={<SolutionPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NewWebsiteApp;
