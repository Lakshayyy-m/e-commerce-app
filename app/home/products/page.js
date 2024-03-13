import React, { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import ProductsGrid from "@/Components/ProductsGrid";
import styles from "./page.module.css";

const Products = async () => {
  const products = await getAllProducts();

  return <ProductsGrid productList={products} />;
};

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
