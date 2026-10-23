import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import products from "../../data";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === id);

  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  if (!product) {
    return <h2 className="product-not-found">Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (!size) {
      setError("Please select a shoe size.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ ...product, size, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setError("");
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    if (!size) {
      setError("Please select a shoe size.");
      return;
    }

    navigate("/checkout", {
      state: {
        product: {
          ...product,
          size,
          quantity,
        },
      },
    });
  };

  return (
    <section className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <p className="product-detail-category">
          {product.category || "Sneakers"}
        </p>

        <h1 className="product-detail-title">{product.name}</h1>

        <p className="product-detail-price">
          ${Number(product.price).toFixed(2)}
        </p>

        <p className="product-detail-description">
          Discover the perfect combination of style and comfort with{" "}
          {product.name}. Designed for everyday wear, these sneakers
          offer a modern look and exceptional comfort.
        </p>

        <div className="product-detail-sizes">
          <h3>Select Size</h3>

          <div className="product-size-options">
            {[38, 39, 40, 41, 42, 43, 44, 45].map((s) => (
              <button
                key={s}
                type="button"
                className={`product-size-btn ${
                  size === s ? "selected" : ""
                }`}
                onClick={() => {
                  setSize(s);
                  setError("");
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="product-detail-error">{error}</p>}

        <div className="product-detail-quantity">
          <h3>Quantity</h3>

          <div className="quantity-controls">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              <RemoveIcon />
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              <AddIcon />
            </button>
          </div>
        </div>

        <div className="product-detail-actions">
          <button
            type="button"
            className="product-add-cart"
            onClick={handleAddToCart}
          >
            <ShoppingBagOutlinedIcon />
            Add to Cart
          </button>

          <button
            type="button"
            className="product-buy-now"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;