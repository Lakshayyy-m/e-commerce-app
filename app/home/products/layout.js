import React from "react";
import ProductNavbar from "@/Components/ProductNavbar";

const ProductLayout = ({ children }) => {
  return (
    <>
      <ProductNavbar />
      {children}
    </>
  );
};

export default ProductLayout;
