import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="category-card">
      <img
        src={image}
        alt={title}
        className="category-card-image"
      />

      <div className="category-card-overlay">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;