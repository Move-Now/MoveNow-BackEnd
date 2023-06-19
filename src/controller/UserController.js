import { pool } from "../database/database.js";

export class User {
    async createUser(req, res) {
        const {name, email, password} = req.body;

        const newUser = await pool.query(
        `INSERT INTO users  
        (name, email, password) 
        VALUES (?,?,?)`
        , [name, email, password]);

        return res.status(201).send(newUser[0]);
    };

    async getUserById(req, res){
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
        return res.status(200).send(user[0]);
    };

    async updateUser(req, res){
        const {name, email, password} = req.body;
        const {id} = req.params;
        const updatedUser = await pool.query(`
        UPDATE users SET 
        name = ?, email = ?, password = ? 
        WHERE id = ? 
        `, [name, email, password, id]);

        return res.status(200).send(updatedUser[0])
    };

    async deleteUser(req, res){
        const {id} = req.params;
        const deleteUser = await pool.query(`
        DELETE FROM
        users 
        WHERE id = ?
        `, [id])

        return res.json()
    }
};