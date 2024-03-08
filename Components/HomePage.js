import React from "react";
import styles from "./HomePage.module.css";
import ProductAccordian from "./ProductAccordian";

const HomePageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Our Products</h1>
      <ProductAccordian />
    </div>
  );
};

export default HomePageComponent;
