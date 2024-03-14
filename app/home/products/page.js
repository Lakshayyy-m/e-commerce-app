import React, { Suspense } from "react";
import styles from "./page.module.css";
import Products from "@/Components/Products";

const ProductsPage = () => {
  return (
    <main className={styles.main}>
      <h1>Content....</h1>
      <Suspense fallback={<p>Loading.....</p>}>
        <Products />
      </Suspense>
    </main>
  );
};

export default ProductsPage;
