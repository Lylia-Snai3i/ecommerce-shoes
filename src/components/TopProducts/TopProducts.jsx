import React from "react";
import TopProductCard from "../TopProductCard/TopProductCard";
import products from "../../data";
import "./TopProducts.css";

const TopProducts = () => {
  return (
    <section className="top-products-section">
      <h2 className="top-products-title">Top Products</h2>

      <div className="top-products-grid">
        {products.map((product) => (
          <TopProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TopProducts;