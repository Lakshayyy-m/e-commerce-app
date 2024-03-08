import React from "react";
import ProductAccordianItem from "./ProductAccordianItem";
import styles from "./ProductAccordian.module.css";

const ProductAccordian = () => {
  return (
    <div className={styles.accordian}>
      <ProductAccordianItem />
    </div>
  );
};

export default ProductAccordian;
