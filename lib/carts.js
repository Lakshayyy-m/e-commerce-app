"use server";
import oracledb from "oracledb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import shortid from "shortid";
import { redirect } from "next/navigation";

export const addProductToCart = async (productName, productSize, quantity) => {
  if (quantity === 0) {
    return { error: "Cannot add product to cart" };
  }
  const connect = await oracledb.getConnection({
    user: "student",
    password: "studentpassword",
    connectString: "localhost:1521/XEPDB1",
  });
  const productIdSet = await connect.execute(
    `SELECT productid FROM Products WHERE productname = :prodName and sizee = :prodSize`,
    { prodName: productName, prodSize: productSize }
  );
  const productId = productIdSet.rows[0][0];

  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: "Sign in first",
    };
  }

  const email = session?.user.email;

  const customerIdSet = await connect.execute(
    `SELECT customerId FROM customers WHERE email = :email`,
    { email: email }
  );
  const customerId = customerIdSet.rows[0][0];

  const productInCart = await connect.execute(
    `SELECT CartId FROM cart where customerid = :custId and productid = :prodid`,
    { custId: customerId, prodId: productId }
  );
  console.log();

  if (productInCart.rows.length === 0) {
    const postCartItem = await connect.execute(
      `INSERT INTO cart VALUES (:cartId, :customerId, :productId, :quantity)`,
      {
        cartId: shortid.generate(),
        customerId: customerId,
        productId: productId,
        quantity: quantity,
      },
      { autoCommit: true }
    );

    return {
      success: "Item Added to cart",
    };
  } else if (productInCart.rows.length !== 0) {
    const postCartItem = await connect.execute(
      `UPDATE cart SET quantity = quantity + :newQuant WHERE cartid = :id`,
      { newQuant: quantity, id: productInCart.rows[0][0] },
      { autoCommit: true }
    );
    return {
      success: "Cart Updated",
    };
  }
};

export const getCartItems = async () => {
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
    `SELECT customerId FROM customers WHERE email = :email`,
    { email: email }
  );

  if (customerIdSet.rows.length === 0) {
    redirect("/verification/address");
  }
  const customerId = customerIdSet.rows[0][0];

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

  return finalProductList;
};
export const constructFinalProduct = async (productId, quantity) => {
  const connect = await oracledb.getConnection({
    user: "student",
    password: "studentpassword",
    connectString: "localhost:1521/XEPDB1",
  });
  const prod = await connect.execute(
    `SELECT productName, sizee, price FROM products WHERE productid = :prodId`,
    { prodId: productId }
  );
  return {
    productName: prod.rows[0][0],
    productSize: prod.rows[0][1],
    productPrice: prod.rows[0][2],
    quantity: quantity,
    productId: productId,
  };
};

export const changeQuantity = async ({ method, productId }) => {
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
    `SELECT customerId FROM customers WHERE email = :email`,
    { email: email }
  );
  const customerId = customerIdSet.rows[0][0];

  if (method === "plus") {
    await connect.execute(
      `UPDATE cart SET quantity = quantity + 1 WHERE productid = :prodid and customerid = :custId`,
      {
        prodId: productId,
        custId: customerId,
      },
      { autoCommit: true }
    );
  }
  if (method === "minus") {
    await connect.execute(
      `UPDATE cart SET quantity = quantity - 1 WHERE productid = :prodid and customerid = :custId`,
      {
        prodId: productId,
        custId: customerId,
      },
      { autoCommit: true }
    );
  }

  await connect.execute(
    `DELETE FROM cart WHERE quantity = 0`,
    {},
    {
      autoCommit: true,
    }
  );
};
