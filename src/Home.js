import React from "react";
import "./Home.css";
import Cover from "./Cover";
import Category from "./Category";
import Latest from "./Latest";
import BannerBestProduct from "./BannerBestProduct";
import BannerBestOfMonth from "./BannerBestOfMonth";
import Footer from "./Footer";


function Home() {
  return (
    <div className="home">
      <Cover />
      <Category />
      <Latest />
      <BannerBestProduct />
      <BannerBestOfMonth />
      <Footer />

      {/*
      offerNews
      system
      footerCover
      footer */}
    </div>
  );
}

export default Home;
