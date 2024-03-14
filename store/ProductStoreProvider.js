"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./product-page-state";

const ProductStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProductStoreProvider;
