import React, { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import ProductsGrid from "@/Components/ProductsGrid";

const Products = async () => {
  const products = await getAllProducts();

  return <ProductsGrid productList={products} />;
};

const ProducstPage = () => {
  return (
    <Suspense fallback={<p>Loading.....</p>}>
      <Products />
    </Suspense>
  );
};

export default ProducstPage;
