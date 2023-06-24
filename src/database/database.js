import mysql from "mysql2";

//cria conexão com mysql
export const pool = mysql.createPool({
    host: '108.167.132.214',
    user: "gabr6451_user_movenow",
    password: "pass_movenow",
    database: "gabr6451_movenow",
    port: "3306",
}).promise();

