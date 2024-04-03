import React from "react";
import styles from "./CartModal.module.css";
import Image from "next/image";
import { completeOrder } from "@/lib/orders";
import toast from "react-hot-toast";

const CartModal = (cartData) => {
  if (cartData.cartData === undefined) {
    return cartData.cartOpen(false);
  }

  const total = cartData.cartData.reduce((total, currVal) => {
    return total + currVal.productPrice * currVal.quantity;
  }, 0);

  const closeCart = () => {
    return cartData.cartOpen(false);
  };

  const completeCartOrder = async () => {
    await completeOrder();
    toast.success("Congratulations your order has been placed!");
    return cartData.cartOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Cart</h1>
        <div className={styles.headerButton}>
          <button className={styles.orderButton} onClick={completeCartOrder}>
            Order
          </button>
          <button className={styles.orderButton} onClick={closeCart}>
            Close
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.mainWrapper}>
        <div className={styles.productWrapper}>
          {cartData.cartData.map((product) => (
            <div className={styles.product} key={Math.random()}>
              <div>
                <h1>{product.productName}</h1>
                <h3>Price per Unit : $ {product.productPrice}</h3>
                <h3>Size : {product.productSize}</h3>
              </div>
              <div>
                <h1>
                  <button
                    className={styles.counterButton}
                    onClick={() => cartData.decrease(product.productId)}
                  >
                    <Image
                      src="/assets/icon-minus.svg"
                      alt="minus"
                      width={20}
                      height={20}
                    />
                  </button>
                  x{product.quantity}
                  <button
                    className={styles.counterButton}
                    onClick={() => cartData.increase(product.productId)}
                  >
                    <Image
                      src={"/assets/icon-plus.svg"}
                      alt="plus"
                      width={20}
                      height={20}
                    />
                  </button>
                </h1>
                <h2>Total : $ {product.productPrice * product.quantity}</h2>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.total}>
          <h1>Total - </h1>
          <h1>${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
