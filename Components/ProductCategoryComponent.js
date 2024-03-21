"use client";
import React from "react";
import { useSelector } from "react-redux";
import ProductsGrid from "./ProductsGrid";
//!!This is to be changed later to exaclty match the category mentioned in the database

const ProductCategoryComponent = ({ productList }) => {
  const currentCategory = useSelector((state) => state.activeCategory);

  const filteredList = productList.filter((product) => {
    if (currentCategory === "all") {
      return true;
    } else if (currentCategory === "tshirt") {
      return product.category === "T-Shirts";
    } else if (currentCategory === "jacket") {
      return product.category === "Jackets";
    } else if (currentCategory === "pants") {
      return product.category === "Pants";
    } else if (currentCategory === "shoes") {
      return product.category === "Shoes";
    }
  });

  return <ProductsGrid productList={filteredList} />;
};

export default ProductCategoryComponent;
