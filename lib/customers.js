"use server";
import oracledb from "oracledb";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AddressSchema } from "@/lib/addressSchema";
import shortid from "shortid";

const connect = await oracledb.getConnection({
  user: "student",
  password: "studentpassword",
  connectString: "localhost:1521/XEPDB1",
});

export const customerExistenceCheck = async (email) => {
  const customer = await connect.execute(
    `SELECT * FROM customers WHERE Email = :email`,
    { email: email }
  );

  return !(customer.rows.length === 0);
};

export const redirecToProducts = () => {
  redirect("/products");
};

export const saveAddress = async (address, user) => {
  const result = AddressSchema.safeParse(address);
  const firstName = user.name.split(" ")[0];
  const secondName = user.name.split(" ").pop();
  const id1 = shortid.generate();
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". \n";
    });
    return {
      error: errorMessage,
    };
  }
  try {
    const save = await connect.execute(
      `INSERT INTO customers VALUES (:cust_id, :firstName, :lastName,:email, :phone, :address, :city, :state, :postalCode)`,
      [
        id1,
        firstName,
        secondName,
        user.email,
        address.phone,
        address.address,
        address.city,
        address.state,
        address.pincode,
      ],
      { autoCommit: true }
    );
  } catch (error) {
    console.log(error);
    return {
      error: "Encountered some error",
    };
  }
  revalidatePath("/");
  redirect("/");
};
