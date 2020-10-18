import React from "react";
import "./Category.css";
import CategoryItem from "./CategoryItem";
import cat1 from "./cat1.png";
import cat2 from "./cat2.png";
import cat3 from "./cat3.png";

function Category() {
  return (
    <div className="category">
      <h1>Shop by Category</h1>
      <div className="category__items">
        <CategoryItem className="category__itemsOne" image={cat1} />
        <CategoryItem className="category__itemsTwo" image={cat2} />
        <CategoryItem className="category__itemsThree" image={cat3} />
      </div>
    </div>
  );
}

export default Category;
