import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { customerExistenceCheck, saveAddress } from "@/lib/customers";
import styles from "./page.module.css";
import AddressForm from "@/Components/AddressForm";

const AddressVerification = async () => {
  const checkDetails = async (formData) => {
    await saveAddress();
  };
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  if (await customerExistenceCheck(session?.user.email)) {
    redirect("/");
  }

  return (
    <section className={styles.wrapper}>
      <AddressForm user={session.user} />
    </section>
  );
};

export default AddressVerification;
