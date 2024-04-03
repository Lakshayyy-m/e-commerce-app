"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";
import styles from "./LoadingComponent.module.css";

const LoadingComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingComponent;
