import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProductsTable.css";

const ProductsTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="products-table-container">
      <div className="products-table-header">
        <h2>All Products</h2>
        <span>{products.length} Products</span>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="products-table-product">
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                </div>
              </td>

              <td>{product.category}</td>

              <td>${Number(product.price).toFixed(2)}</td>

              <td>
                <div className="products-table-actions">
                  <button
                    className="products-table-edit"
                    onClick={() => onEdit(product)}
                    aria-label={`Edit ${product.name}`}
                  >
                    <EditOutlinedIcon />
                  </button>

                  <button
                    className="products-table-delete"
                    onClick={() => onDelete(product.id)}
                    aria-label={`Delete ${product.name}`}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <p className="products-table-empty">
          No products available.
        </p>
      )}
    </div>
  );
};

export default ProductsTable;