import React from "react";
import ProductAccordianItem from "./ProductAccordianItem";
import styles from "./ProductAccordian.module.css";
import homePageProducts from "@/store/HomePageContent";

const ProductAccordian = () => {
  return (
    <div className={styles.accordian}>
      {homePageProducts.map((product) => (
        <ProductAccordianItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductAccordian;
