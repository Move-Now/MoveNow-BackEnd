import express from "express";
import { routes } from "./routes/routes.js";
import cors from 'cors'

//instancia e configura o express
const app = express();
app.use(express.json());
app.use(cors());

//utiliza rotas do arquivo routes.js
app.use('/', routes)

//cria porta para o servidor
const port = 8800;
app.listen(port, () => console.log("listening to port" + port));