"use server";
import { productListSorter } from "@/util/utility";
import oracledb from "oracledb";

const connect = await oracledb.getConnection({
  user: "student",
  password: "studentpassword",
  connectString: "localhost:1521/XEPDB1",
});

export const getAllProducts = async () => {
  const products = await connect.execute(`SELECT * FROM products`);

  return productListSorter(products.rows);
};

export const getProduct = async (productId) => {
  try {
    const product = await connect.execute(
      `SELECT * FROM products WHERE productid = :prodid`,
      { prodid: productId }
    );
    return productListSorter(product.rows)[0];
  } catch (error) {
    return undefined;
  }
};

export const getProductSizes = async (productName) => {
  const sizes = await connect.execute(
    `SELECT sizee FROM products WHERE productname = :prodName`,
    { prodName: productName }
  );
  return sizes.rows;
};
