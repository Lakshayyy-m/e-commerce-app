import React from "react";
import styles from "./ProductsGridItem.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductsGridItem = ({ product, index }) => {


  if (!product.imageUrl.startsWith("https")) {
    product.imageUrl = "/assets/image-product-1.jpg";
  }
  return (
    <motion.div
      key={index}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.04, transition: { delay: 0 } }}
    >
      <Link href={`/products/${product.productId}`} className={styles.card}>
        <div className={styles.image}>
          <picture>
            <img
             src={product.imageUrl}
             alt="Product Image"
             width={200}
             height={200}
             className={styles.image}
            />
          </picture>
        </div>
        <div className={styles.info}>
          <h3>{product.productName}</h3>
          <p>${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductsGridItem;
