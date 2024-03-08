"use client";

import React, { useState } from "react";
import styles from "./ProductNavbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import allIcon from "@/assets/all-inclusive.svg";
import shirtIcon from "@/assets/shirt.svg";
import tshirtIcon from "@/assets/tshirt.svg";
import jacketIcon from "@/assets/jacket.svg";
import shoeIcon from "@/assets/sneakers.svg";

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
  const [activeTab, setActiveTab] = useState("all");
  return (
    <nav className={styles.navigation}>
      <AnimatePresence>
        <motion.li
          layout="size"
          transition={{ duration: 2 }}
          className={`${styles.list} ${
            activeTab === "all" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveTab("all")}
          variants={tabVariant}
          animate={activeTab === "all" ? "active" : "inactive"}
        >
          <Image src={allIcon} alt="All" width={30} />
          {activeTab === "all" ? (
            <motion.div
              variants={tabTextVariant}
              animate={activeTab === "all" ? "active" : "inactive"}
            >
              {" "}
              ALL{" "}
            </motion.div>
          ) : (
            ""
          )}
        </motion.li>
        <motion.li
          layout="size"
          className={`${styles.list} ${
            activeTab === "shirts" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveTab("shirts")}
          variants={tabVariant}
          animate={activeTab === "shirts" ? "active" : "inactive"}
        >
          <Image src={shirtIcon} alt="Shirts" width={30} />
          {activeTab === "shirts" ? (
            <motion.div
              variants={tabTextVariant}
              animate={activeTab === "shirts" ? "active" : "inactive"}
            >
              {" "}
              SHIRTS{" "}
            </motion.div>
          ) : (
            ""
          )}
        </motion.li>
        <motion.li
          layout="size"
          className={`${styles.list} ${
            activeTab === "tshirt" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveTab("tshirt")}
          variants={tabVariant}
          animate={activeTab === "tshirt" ? "active" : "inactive"}
        >
          <Image src={tshirtIcon} alt="Tshirt" width={30} />
          {activeTab === "tshirt" ? (
            <motion.div
              variants={tabTextVariant}
              animate={activeTab === "tshirt" ? "active" : "inactive"}
            >
              {" "}
              T-SHIRT{" "}
            </motion.div>
          ) : (
            ""
          )}
        </motion.li>
        <motion.li
          layout="size"
          className={`${styles.list} ${
            activeTab === "shoes" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveTab("shoes")}
          variants={tabVariant}
          animate={activeTab === "shoes" ? "active" : "inactive"}
        >
          <Image src={shoeIcon} alt="Shoes" width={30} />
          {activeTab === "shoes" ? (
            <motion.div
              variants={tabTextVariant}
              animate={activeTab === "shoes" ? "active" : "inactive"}
            >
              {" "}
              SHOES{" "}
            </motion.div>
          ) : (
            ""
          )}
        </motion.li>
        <motion.li
          layout="size"
          className={`${styles.list} ${
            activeTab === "jacket" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveTab("jacket")}
          variants={tabVariant}
          animate={activeTab === "jacket" ? "active" : "inactive"}
        >
          <Image src={jacketIcon} alt="Jacket" width={30} />
          {activeTab === "jacket" ? (
            <motion.div
              variants={tabTextVariant}
              animate={activeTab === "jacket" ? "active" : "inactive"}
            >
              {" "}
              JACKET{" "}
            </motion.div>
          ) : (
            ""
          )}
        </motion.li>
      </AnimatePresence>
    </nav>
  );
};

export default ProductNavbar;
