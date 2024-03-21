"use client";

import React, { useState } from "react";
import styles from "./ProductNavbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import allIcon from "@/assets/all-inclusive.svg";
import pantIcon from "@/assets/trousers.svg";
import tshirtIcon from "@/assets/tshirt.svg";
import jacketIcon from "@/assets/jacket.svg";
import shoeIcon from "@/assets/sneakers.svg";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "@/store/product-page-state";

//!gotta fix the animation shit

const tabVariant = {
  active: {
    width: "auto",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "anticipate",
    },
  },
  inactive: {
    width: "auto",
    transition: {
      type: "tween",
      duration: 0.1,
    },
  },
};

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
      ease: "anticipate",
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: "none" },
  },
};

const ProductNavbar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeCategory);

  const changecategory = (cat) => {
    dispatch(productAction.changecategory(cat));
  };

  return (
    <nav className={styles.navigation}>
      <li
        layout="size"
        transition={{ duration: 2 }}
        className={`${styles.list} ${
          activeTab === "all" ? styles.active : styles.inactive
        }`}
        onClick={() => changecategory("all")}
        // variants={tabVariant}
        initial={{ width: "auto" }}
        animate={{ width: "auto" }}
        // animate={activeTab === "all" ? "active" : "inactive"}
      >
        <Image src={allIcon} alt="All" width={30} />
        {activeTab === "all" ? (
          <div
            variants={tabTextVariant}
            animate={activeTab === "all" ? "active" : "inactive"}
          >
            {" "}
            ALL{" "}
          </div>
        ) : (
          ""
        )}
      </li>
      <li
        layout="size"
        className={`${styles.list} ${
          activeTab === "pants" ? styles.active : styles.inactive
        }`}
        onClick={() => changecategory("pants")}
        variants={tabVariant}
        animate={activeTab === "pants" ? "active" : "inactive"}
      >
        <Image src={pantIcon} alt="Shirts" width={30} />
        {activeTab === "pants" ? (
          <div
            variants={tabTextVariant}
            animate={activeTab === "pants" ? "active" : "inactive"}
          >
            {" "}
            PANTS{" "}
          </div>
        ) : (
          ""
        )}
      </li>
      <li
        layout="size"
        className={`${styles.list} ${
          activeTab === "tshirt" ? styles.active : styles.inactive
        }`}
        onClick={() => changecategory("tshirt")}
        variants={tabVariant}
        animate={activeTab === "tshirt" ? "active" : "inactive"}
      >
        <Image src={tshirtIcon} alt="Tshirt" width={30} />
        {activeTab === "tshirt" ? (
          <div
            variants={tabTextVariant}
            animate={activeTab === "tshirt" ? "active" : "inactive"}
          >
            {" "}
            T-SHIRT{" "}
          </div>
        ) : (
          ""
        )}
      </li>
      <li
        layout="size"
        className={`${styles.list} ${
          activeTab === "shoes" ? styles.active : styles.inactive
        }`}
        onClick={() => changecategory("shoes")}
        variants={tabVariant}
        animate={activeTab === "shoes" ? "active" : "inactive"}
      >
        <Image src={shoeIcon} alt="Shoes" width={30} />
        {activeTab === "shoes" ? (
          <div
            variants={tabTextVariant}
            animate={activeTab === "shoes" ? "active" : "inactive"}
          >
            {" "}
            SHOES{" "}
          </div>
        ) : (
          ""
        )}
      </li>
      <li
        layout="size"
        className={`${styles.list} ${
          activeTab === "jacket" ? styles.active : styles.inactive
        }`}
        onClick={() => changecategory("jacket")}
        variants={tabVariant}
        animate={activeTab === "jacket" ? "active" : "inactive"}
      >
        <Image src={jacketIcon} alt="Jacket" width={30} />
        {activeTab === "jacket" ? (
          <div
            variants={tabTextVariant}
            animate={activeTab === "jacket" ? "active" : "inactive"}
          >
            {" "}
            JACKET{" "}
          </div>
        ) : (
          ""
        )}
      </li>
    </nav>
  );
};

export default ProductNavbar;
