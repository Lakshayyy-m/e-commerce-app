import React from "react";
import styles from "./ProductAccordianItem.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductAccordianItem = (props) => {
  return (
    <div className={`${styles[`wrapper-${props.side}`]}`}>
      <div className={styles.image}>
        <Image
          src={props.imageSource}
          width={550}
          height={550}
          alt={props.title}
        />
      </div>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Link href={"home/products"}>Shop for {props.id}...</Link>
      </div>
    </div>
  );
};

export default ProductAccordianItem;
