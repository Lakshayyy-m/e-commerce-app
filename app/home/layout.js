"use client";

import React, { useState } from "react";
import styles from "./layout.module.css";

const HomeLayout = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <nav className={styles.navigation}>
      <li
        className={`${styles.list} ${activeTab === "all" ? styles.active : ""}`}
        onCLick={() => setActiveTab("all")}
      >
        ALL
      </li>
      <li
        className={`${styles.list} ${
          activeTab === "shirts" ? styles.active : ""
        }`}
        onCLick={() => setActiveTab("shirts")}
      >
        SHIRTS
      </li>
      <li
        className={`${styles.list} ${
          activeTab === "pants" ? styles.active : ""
        }`}
        onCLick={() => setActiveTab("pants")}
      >
        PANTS
      </li>
      <li
        className={`${styles.list} ${
          activeTab === "tshirt" ? styles.active : ""
        }`}
        onCLick={() => setActiveTab("tshirt")}
      >
        T-SHIRT
      </li>
      <li
        className={`${styles.list} ${
          activeTab === "jacket" ? styles.active : ""
        }`}
        onCLick={() => setActiveTab("jacket")}
      >
        JACKET
      </li>
    </nav>
  );
};

export default HomeLayout;
