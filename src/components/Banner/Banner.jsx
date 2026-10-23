import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Banner.css";


const Banner = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <section className="banner">

      {/* Banner Image */}
      <div className="banner-image-container">
        <img
          src="/images/sneakershome.jpg"
          alt="Billy Sneakers Banner"
          className="banner-image"
        />
      </div>

      {/* Search Bar */}
      <div className="banner-search-container">
        <form className="banner-search" onSubmit={handleSearch}>

          <div className="banner-input-container">
            <SearchIcon className="banner-search-icon" />

            <input
              type="text"
              placeholder="Search a sneaker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button type="submit" className="banner-search-btn">
            Search
          </button>

        </form>
      </div>

    </section>
  );
};

export default Banner;