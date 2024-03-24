"use client";
import React from "react";
import styles from "./MainHeader.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import cartIcon from "@/assets/shopping-cart.svg";
import Image from "next/image";

const AuthVerifyContent = () => {
  const { data: session } = useSession();
  // console.log(session.user);

  if (session) {
    return (
      <div className={styles.headerInfo}>
        <h3>Hi, {session?.user?.name}</h3>
        <button className={styles.cartIcon}>
          <Image src={cartIcon} width={16} height={16} alt="cart" />
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className={styles.button}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => signIn()} className={styles.button}>
        Sign In
      </button>
    </>
  );
};

const MainHeader = () => {
  return (
    <nav className={styles.navigation}>
      <h1>Armaanjot and works</h1>
      <AuthVerifyContent />
    </nav>
  );
};

export default MainHeader;
