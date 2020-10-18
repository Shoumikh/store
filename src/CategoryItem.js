import React from "react";
import "./CategoryItem.css";

function CategoryItem({ image }) {
  return (
    <div className="categoryItem">
      <img src={image} alt="" />
    </div>
  );
}

export default CategoryItem;
