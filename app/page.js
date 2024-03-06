"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Login from "@/Components/Login";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <main className={styles.main}>
      <AnimatePresence>
        {!isLoggedIn && (
          <motion.div
            className={styles.loginComponent}
            key="loginComponent"
            exit={{ opacity: 0 }}
          >
            <Login changeLoginStatus={setIsLoggedIn} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
