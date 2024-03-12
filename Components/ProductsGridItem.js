import React from "react";
import styles from "./ProductsGridItem.module.css";
import Image from "next/image";

const ProductsGridItem = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={
            "https://crepdogcrew.com/cdn/shop/products/image_9a61c3ad-a6e0-4fd3-b95d-9e9b7fb35a3e_1000x.jpg?v=1628321972"
          }
          alt="Product Image"
        />
      </div>
      <div className={styles.info}>
        <h3>{product.productName}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsGridItem;
