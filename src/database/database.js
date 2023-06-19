import mysql from "mysql2";

//cria conexão com mysql
export const pool = mysql.createPool({
    host: '127.0.0.1',
    user: "root",
    password: "@23santosmysql2023",
    database: "crud_node",
    port: "3306",
}).promise();

