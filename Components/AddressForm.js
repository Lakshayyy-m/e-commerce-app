"use client";
import React from "react";
import styles from "./AddressForm.module.css";
import { saveAddress } from "@/lib/customers";
import toast from "react-hot-toast";
import { AddressSchema } from "@/lib/addressSchema";

const AddressForm = ({ user }) => {
  const checkDetails = async (formData) => {
    const addressDetails = {
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),
      phone: formData.get("phone"),
    };
    const result = AddressSchema.safeParse(addressDetails);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". \n";
      });
      toast.error(errorMessage, { duration: 7000 });
      return;
    }

    const response = await saveAddress(result.data, user);
    if (response?.error) {
      toast.error(response.error);
      return;
    }
    if (response?.success) {
        toast.success(response.success);
    }
  };

  return (
    <>
      <h1>Enter Your Details</h1>
      <form className={styles.form} action={checkDetails}>
        <h2>Address</h2>
        <input className={styles.input} name="address" />
        <h2>City</h2>
        <input className={styles.input} name="city" />
        <h2>State</h2>
        <input className={styles.input} name="state" />
        <h2>Pincode</h2>
        <input className={styles.input} name="pincode" />
        <h2>Phone Number</h2>
        <input className={styles.input} name="phone" />
        <button className={styles.submit}>Submit</button>
      </form>
    </>
  );
};

export default AddressForm;
