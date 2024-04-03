"use server";
import oracledb from "oracledb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import shortid from "shortid";
import { redirect } from "next/navigation";
import { constructFinalProduct } from "./carts";

export const completeOrder = async () => {
  const connect = await oracledb.getConnection({
    user: "student",
    password: "studentpassword",
    connectString: "localhost:1521/XEPDB1",
  });

  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: "Sign in first",
    };
  }

  const email = session?.user.email;

  const customerIdSet = await connect.execute(
    `SELECT customerId, address, city, statee, postalcode FROM customers WHERE email = :email`,
    { email: email }
  );
  const customerId = customerIdSet.rows[0][0];
  const address = customerIdSet.rows[0][1];
  const city = customerIdSet.rows[0][2];
  const state = customerIdSet.rows[0][3];
  const postalCode = customerIdSet.rows[0][4];
  const orderId = shortid.generate();
  const orderDate = new Date();

  const cartDetails = await connect.execute(
    `SELECT productid, quantity FROM cart WHERE customerid = :custId`,
    { custId: customerId }
  );
  const productList = [];
  cartDetails.rows.map((cart) => {
    productList.push({
      productId: cart[0],
      quantity: cart[1],
    });
  });

  const finalProductList = await Promise.all(
    productList.map((product) =>
      constructFinalProduct(product.productId, product.quantity)
    )
  );

  await Promise.all(
    finalProductList.map((product) => {
      connect.execute(
        `INSERT INTO orders VALUES (:orderItemId, :orderId,:custId,:productId,:orderDate,:price, :shippingAddress)`,
        {
          orderItemId: shortid.generate(),
          orderId: orderId,
          custId: customerId,
          productId: product.productId,
          orderDate: orderDate,
          price: product.productPrice * product.quantity,
          shippingAddress: `${address}, ${city}, ${state}, ${postalCode}`,
        },
        { autoCommit: true }
      );
    })
  );

  await connect.execute(
    `DELETE FROM cart WHERE customerid = :custId`,
    { custId: customerId },
    { autoCommit: true }
  );

  redirect("/");
};
