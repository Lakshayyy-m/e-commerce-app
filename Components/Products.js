

import ProductCategoryComponent from "./ProductCategoryComponent";
import { getAllProducts } from "@/lib/products";

const Products = async () => {
  const products = await getAllProducts();

  return <ProductCategoryComponent productList={products} />;
};

export default Products;
