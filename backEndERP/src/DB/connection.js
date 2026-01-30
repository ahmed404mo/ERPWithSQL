import mysql2 from "mysql2/promise";
const db = mysql2.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  database: "nexus_erp",
});

    console.log("Connected to database ❤️");

export default db;
