import React, { useState, useEffect } from "react";

import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import ProductForm from "../../components/ProductForm/ProductForm";

import initialProducts from "../../data";

import "./DashboardPage.css";

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("billy-products");

      return savedProducts !== null
        ? JSON.parse(savedProducts)
        : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [editingProduct, setEditingProduct] = useState(null);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem("billy-products", JSON.stringify(products));
  }, [products]);

  // Create or Update
  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id
            ? { ...product, ...productData }
            : product
        )
      );
    } else {
      const newProduct = {
        ...productData,
        id: crypto.randomUUID(),
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setEditingProduct(null);
    setActiveSection("products");
  };

  // Edit
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setActiveSection("add");
  };

  // Delete
  const handleDeleteProduct = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  // Cancel Form
  const handleCancel = () => {
    setEditingProduct(null);
    setActiveSection("products");
  };

  const handleSectionChange = (section) => {
    if (section === "add") {
      setEditingProduct(null);
    }

    setActiveSection(section);
  };

  return (
    <div className="dashboard-layout">
      <DashboardSidebar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your Billy Sneakers store.</p>
          </div>

          <span className="dashboard-admin-badge">
            Administrator
          </span>
        </div>

        {activeSection === "dashboard" && (
          <>
            <div className="dashboard-stats">
              <div className="dashboard-stat-card">
                <h3>Total Products</h3>
                <p>{products.length}</p>
              </div>

              <div className="dashboard-stat-card">
                <h3>Men Products</h3>
                <p>
                  {products.filter((p) => p.category === "Men").length}
                </p>
              </div>

              <div className="dashboard-stat-card">
                <h3>Women Products</h3>
                <p>
                  {products.filter((p) => p.category === "Women").length}
                </p>
              </div>

              <div className="dashboard-stat-card">
                <h3>Kids Products</h3>
                <p>
                  {products.filter((p) => p.category === "Kids").length}
                </p>
              </div>
            </div>

            <ProductsTable
              products={products}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </>
        )}

        {activeSection === "products" && (
          <ProductsTable
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        )}

        {activeSection === "add" && (
          <ProductForm
            editingProduct={editingProduct}
            onSave={handleSaveProduct}
            onCancel={handleCancel}
          />
        )}
      </main>
    </div>
  );
};

export default DashboardPage;