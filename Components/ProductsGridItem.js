import React from "react";
import styles from "./ProductsGridItem.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductsGridItem = ({ key, product, index }) => {
  return (
    <motion.div
      className={styles.card}
      key={key}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.04, transition: { delay: 0 } }}
    >
      <div className={styles.image}>
        <Image
          src={
            "https://crepdogcrew.com/cdn/shop/products/image_9a61c3ad-a6e0-4fd3-b95d-9e9b7fb35a3e_1000x.jpg?v=1628321972"
          }
          alt="Product Image"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3>{product.productName}</h3>
        <p>${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductsGridItem;
