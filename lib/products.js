"use server";
import { productListSorter } from "@/util/utility";
import oracledb from "oracledb";

let connect = await oracledb.getConnection({
  user: "student",
  password: "studentpassword",
  connectString: "localhost:1521/XEPDB1",
});

export const getAllProducts = async () => {
  const products = await connect.execute(`SELECT * FROM products`);

  return productListSorter(products.rows);
};

// let query = "SELECT * from student";
// connect.execute(query, (err, rows) => {
//   if (err) throw err;
//   console.log(rows);
// });
