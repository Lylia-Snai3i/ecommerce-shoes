import React from "react";
import { Link } from "react-router-dom";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddIcon from "@mui/icons-material/Add";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="dashboard-sidebar">
      <h2 className="dashboard-logo">
        BILLY <span>SNEAKERS</span>
      </h2>

      <p className="dashboard-menu-label">ADMIN PANEL</p>

      <nav className="dashboard-menu">
        <button
          className={activeSection === "dashboard" ? "active" : ""}
          onClick={() => setActiveSection("dashboard")}
        >
          <DashboardOutlinedIcon />
          Dashboard
        </button>

        <button
          className={activeSection === "products" ? "active" : ""}
          onClick={() => setActiveSection("products")}
        >
          <Inventory2OutlinedIcon />
          Products
        </button>

        <button
          className={activeSection === "add" ? "active" : ""}
          onClick={() => setActiveSection("add")}
        >
          <AddIcon />
          Add Product
        </button>
      </nav>

      <div className="dashboard-sidebar-bottom">
        <Link to="/">
          <StorefrontOutlinedIcon />
          Back to Store
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;