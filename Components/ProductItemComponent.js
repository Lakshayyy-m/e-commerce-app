"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProductItemComponent.module.css";
import toast from "react-hot-toast";
import { addProductToCart } from "@/lib/carts";
import Link from "next/link";

const ProductItemComponent = ({ product, sizes }) => {
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(null);

  console.log(product);

  const addToCart = async () => {
    if (counter === 0 || size === null) {
      toast.error("Kindly select the details");
      return;
    }

    const response = await addProductToCart(
      product.productName,
      sizes[size][0],
      counter
    );

    if (response?.error) {
      toast.error(response.error);
    }

    if (response?.success) {
      toast.success(response.success);
    }
    return;
  };

  return (
    <main className={styles.main}>
      <Link className={styles.goBack} href={"/products"}>
        <Image
          src="/assets/backArrow.svg"
          alt="goBack"
          width={40}
          height={40}
        />
      </Link>
      <div className={styles.left}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <picture>
            <img
              src={product.imageUrl}
              alt="Product Image"
              width={400}
              height={400}
              className={styles.image}
            />
          </picture>
        </motion.div>
      </div>
      <div className={styles.right}>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.manufacturer}
        >
          {product.manufacturer}
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.productName}
        >
          {product.productName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.description}
        >
          Size -
          {sizes.map((sizeLocal, index) => (
            <button
              key={sizeLocal[0]}
              onClick={() => {
                setSize(index);
              }}
              className={`${styles.size} ${
                index === size ? styles.activeSize : ""
              }`}
            >
              {sizeLocal[0]}
            </button>
          ))}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.price}
        >
          ${product.price}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.quantCart}
        >
          <div className={styles.counter}>
            <button
              className={styles.minus}
              onClick={() =>
                setCounter((prev) => {
                  if (prev === 0) {
                    return 0;
                  }

                  return prev - 1;
                })
              }
            >
              <Image
                src={"/assets/icon-minus.svg"}
                width={20}
                height={20}
                alt="minus"
              />
            </button>
            {counter}
            <button
              className={styles.plus}
              onClick={() => setCounter((prev) => prev + 1)}
            >
              <Image
                src={"/assets/icon-plus.svg"}
                width={20}
                height={20}
                alt="plus"
              />
            </button>
          </div>
          <button className={styles.addCart} onClick={addToCart}>
            Add to Cart
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default ProductItemComponent;
