import express from "express";
import { routes } from "./routes/routes.js";

//instancia e configura o express
const app = express();
app.use(express.json());

//utiliza rotas do arquivo routes.js
app.use('/', routes)

//cria porta para o servidor
const port = 8800;
app.listen(port, () => console.log("listening to port" + port));