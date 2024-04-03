import React from "react";
import { redirect } from "next/navigation";
import ProductItemComponent from "@/Components/ProductItemComponent";
import { getProduct, getProductSizes } from "@/lib/products";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ProductItemPage = async ({ params }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  const product = await getProduct(params.productId);
  if (!product) redirect("/products");
  const sizes = await getProductSizes(product.productName);

  return <ProductItemComponent product={product} sizes={sizes} />;
};

export default ProductItemPage;
