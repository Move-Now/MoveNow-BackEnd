import express from "express";
import { Order } from "../controller/OrderControllers.js";

export const routes = express.Router();

const OrderController = new Order();

routes.get('/orcamentos', OrderController.getOrder)
routes.get('/orcamentos/:id', OrderController.getOrderItens)
routes.post('/orcamento/enviar', OrderController.createOrder)
routes.get('/usuario/:id', OrderController.getUserById)