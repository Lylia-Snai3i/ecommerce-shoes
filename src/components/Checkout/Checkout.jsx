import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product) return;

    alert("Your order has been placed successfully!");
    navigate("/");
  };

  if (!product) {
    return (
      <div className="checkout-empty">
        <h2>No product selected</h2>
        <p>Please select a product before proceeding to checkout.</p>

        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  const subtotal = Number(product.price) * Number(product.quantity);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <section className="checkout-container">

      {/* Checkout Header */}
      <div className="checkout-header">
        <button
          className="checkout-back"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
          Continue Shopping
        </button>

        <h1>Checkout</h1>

        <p>Complete your order by providing your details below.</p>
      </div>

      <div className="checkout-content">

        {/* LEFT SIDE */}
        <div className="checkout-left">

          <form id="checkout-form" onSubmit={handleSubmit}>

            {/* Shipping Information */}
            <div className="checkout-box">

              <div className="checkout-box-title">
                <LocalShippingOutlinedIcon />
                <h2>Shipping Information</h2>
              </div>

              <div className="checkout-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-row">
                <div className="checkout-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label>Street Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your street address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-row">
                <div className="checkout-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-box">

              <div className="checkout-box-title">
                <LockOutlinedIcon />
                <h2>Payment Method</h2>
              </div>

              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />

                <div>
                  <strong>Cash on Delivery</strong>
                  <p>Pay when your order arrives.</p>
                </div>
              </label>
            </div>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">

          <div className="checkout-box checkout-summary">

            <h2>Order Summary</h2>

            {/* Product */}
            <div className="checkout-product">

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="checkout-product-info">
                <h3>{product.name}</h3>

                <p>Size: {product.size}</p>

                <p>Quantity: {product.quantity}</p>

                <strong>
                  ${Number(product.price).toFixed(2)}
                </strong>
              </div>
            </div>

            {/* Price Details */}
            <div className="checkout-price-details">

              <div className="checkout-price-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="checkout-price-row">
                <span>Shipping</span>
                <span className="checkout-free">Free</span>
              </div>

              <div className="checkout-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            <button
              type="submit"
              form="checkout-form"
              className="checkout-place-order"
            >
              Place Order
            </button>

            <p className="checkout-secure">
              <LockOutlinedIcon />
              Secure Checkout
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;