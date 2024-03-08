import React from "react";
import styles from "./ProductAccordianItem.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductAccordianItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={
            "https://crepdogcrew.com/cdn/shop/products/image_9a61c3ad-a6e0-4fd3-b95d-9e9b7fb35a3e_1000x.jpg?v=1628321972"
          }
          width={550}
          height={550}
          alt="Product Image"
        />
      </div>
      <div className={styles.content}>
        <h1>SHOES</h1>
        <p>
          Step into style and comfort with our exquisite collection of shoes.
          From timeless classics to contemporary trends, our curated selection
          caters to every taste. Stay ahead of the fashion curve with our
          on-trend styles, guaranteed to make a bold statement.
        </p>
        <Link href={"home/products"}>akjbdkjadb</Link>
      </div>
    </div>
  );
};

export default ProductAccordianItem;
