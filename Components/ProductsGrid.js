import React from "react";
import ProductsGridItem from "./ProductsGridItem";
import styles from "./ProductsGrid.module.css";

const ProductsGrid = ({ productList }) => {
  const uniqueProductsList = [];
  const uniqueNameList = [];

  productList.map((product) => {
    if (uniqueNameList.indexOf(product.productName) !== -1) {
      return;
    } else {
      uniqueNameList.push(product.productName);
      uniqueProductsList.push(product);
    }
  });

  return (
    <div className={styles.grid}>
      {uniqueProductsList.map((product) => (
        <ProductsGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
