import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";


const Categories = () => {
  return (
    <section className="categories-section">

      <h2 className="categories-title">
        Categories
      </h2>

      <div className="categories-grid">

        <CategoryCard
          title="Women Sneakers"
          image="/images/women_sneakers.jpg"
          link="/women"
        />

        <CategoryCard
          title="Men Sneakers"
          image="/images/men_sneakers.jpg"
          link="/men"
        />

        <CategoryCard
          title="Kids Sneakers"
          image="/images/kids_sneakers.jpg"
          link="/kids"
        />

        <CategoryCard
          title="Socks"
          image="/images/sockes.jpg"
          link="/socks"
        />

      </div>

    </section>
  );
};

export default Categories;