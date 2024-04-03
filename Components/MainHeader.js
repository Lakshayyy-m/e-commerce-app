"use client";
import React, { Suspense, useState } from "react";
import styles from "./MainHeader.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import CartModal from "./CartModal";
import { changeQuantity, getCartItems } from "@/lib/carts";
import Link from "next/link";
import LoadingComponent from "./LoadingComponent";

const AuthVerifyContent = () => {
  const { data: session } = useSession();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  const openCart = async () => {
    setCartData(await getCartItems());
    setCartIsOpen(true);
  };

  const increase = async (productId) => {
    await changeQuantity({ method: "plus", productId });
    setCartData(await getCartItems());
  };
  const decrease = async (productId) => {
    await changeQuantity({ method: "minus", productId });
    setCartData(await getCartItems());
  };

  if (session) {
    return (
      <div className={styles.headerInfo}>
        <h3>Hi, {session?.user?.name}</h3>
        <motion.button
          className={styles.cartIcon}
          onClick={openCart}
          layoutId="cart"
        >
          <Image
            src={"/assets/shopping-cart.svg"}
            width={16}
            height={16}
            alt="cart"
          />
        </motion.button>
        <button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className={styles.button}
        >
          Sign Out
        </button>
        <Suspense fallback={<LoadingComponent />}>
          {cartIsOpen ? (
            <div className={styles.backdrop}>
              <motion.div className={styles.cart} layoutId="cart">
                <CartModal
                  cartData={cartData}
                  cartOpen={setCartIsOpen}
                  increase={increase}
                  decrease={decrease}
                />
              </motion.div>
            </div>
          ) : (
            ""
          )}
        </Suspense>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}/verification/address`,
          })
        }
        className={styles.button}
      >
        Sign In
      </button>
    </>
  );
};

const MainHeader = () => {
  return (
    <nav className={styles.navigation}>
      <Link href={"/"} className={styles.link}>
        <h1>Sultaan and works</h1>
      </Link>
      <AuthVerifyContent />
    </nav>
  );
};

export default MainHeader;
