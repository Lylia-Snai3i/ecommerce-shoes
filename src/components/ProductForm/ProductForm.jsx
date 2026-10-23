import React, { useState, useEffect } from "react";
import "./ProductForm.css";

const ProductForm = ({ onSave, editingProduct, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Men",
    image: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
        image: editingProduct.image,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "Men",
        image: "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.image) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      ...formData,
      price: Number(formData.price),
    });
  };

  return (
    <div className="product-form-container">
      <div className="product-form-header">
        <h2>
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>

        <p>
          {editingProduct
            ? "Update product information."
            : "Enter the details of your new product."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="product-form-field">
          <label>Product Name</label>

          <input
            type="text"
            name="name"
            placeholder="Example: Air Jordan 1"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form-row">
          <div className="product-form-field">
            <label>Price ($)</label>

            <input
              type="number"
              name="price"
              placeholder="150"
              min="0.01"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="product-form-field">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </div>

        <div className="product-form-field">
          <label>Product Image URL</label>

          <input
            type="text"
            name="image"
            placeholder="/images/jorden1.png"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {formData.image && (
          <div className="product-form-preview">
            <img src={formData.image} alt="Product preview" />
          </div>
        )}

        <div className="product-form-actions">
          <button type="submit" className="product-form-save">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>

          <button
            type="button"
            className="product-form-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;