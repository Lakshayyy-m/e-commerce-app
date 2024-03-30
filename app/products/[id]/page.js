import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const ProductItemPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Image
          src={"/assets/image-product-1.jpg"}
          alt="Product Image"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.right}>
        <h3 className={styles.manufacturer}>Manufacturer</h3>
        <h1 className={styles.productName}>Product Name</h1>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <h2 className={styles.price}>$100.00</h2>
        <div className={styles.quantCart}>
          <div className={styles.counter}>- 0 +</div>
          <div className={styles.addCart}>Add to Cart</div>
        </div>
      </div>
    </main>
  );
};

export default ProductItemPage;
