import React from "react";
import ProductsGridItem from "./ProductsGridItem";

const ProductsGrid = ({ productList }) => {
  return productList.map((product) => (
    <ProductsGridItem key={product.id} product={product} />
  ));
};

export default ProductsGrid;
