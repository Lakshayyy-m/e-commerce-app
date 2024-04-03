import React, { Suspense } from "react";
import styles from "./page.module.css";
import Products from "@/Components/Products";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProductNavbar from "@/Components/ProductNavbar";
import Loading from "./loading";

const ProductsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <ProductNavbar />
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </main>
    </>
  );
};

export default ProductsPage;
