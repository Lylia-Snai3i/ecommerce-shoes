import React from "react";

import Navbar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import TopProducts from "../../components/TopProducts/TopProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <TopProducts/>
      <Footer />
    </>
  );
};

export default Home;