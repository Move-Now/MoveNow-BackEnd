import express from "express";
import { User } from "../controller/UserController.js";


export const routes = express.Router();

// router.get("/users")
const UsersController = new User()

routes.get("/user/:id", UsersController.getUserById);
routes.post("/create", UsersController.createUser);
routes.put("/update/user/:id", UsersController.updateUser);