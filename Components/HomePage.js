import React from "react";
import styles from "./HomePage.module.css";
import ProductAccordian from "./ProductAccordian";
import LandingPageComponent from "./LandingPageComponent";

const HomePageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <LandingPageComponent />
      <h1 className={styles.heading}>Our Products</h1>
      <ProductAccordian />
    </div>
  );
};

export default HomePageComponent;
