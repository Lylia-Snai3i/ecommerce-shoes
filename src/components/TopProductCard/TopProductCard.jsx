import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./TopProductCard.css";

const TopProductCard = ({ id, name, price, image }) => {
  return (
    <div className="top-product-card">
      <Link to={`/product/${id}`} className="top-product-image">
        <img src={image} alt={name} />
      </Link>

      <div className="top-product-info">
        <Link to={`/product/${id}`} className="top-product-name">
          {name}
        </Link>

        <div className="top-product-bottom">
          <span className="top-product-price">
            ${price}
          </span>

          <button
            type="button"
            className="top-product-cart"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBagOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;