import express from "express";
import dotenv from "dotenv";
import produtoRoutes from "./routes/produto.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(produtoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});