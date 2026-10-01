import express from "express";
import produtoService from "../services/produto.service.js";

const router = express.Router();

router.post("/produtos", async (req, res) => {
    try {
        const produto = await produtoService.create(req.body);

        return res.status(201).json(produto);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            erro: "Erro ao cadastrar produto."
        });
    }
});

router.get("/produtos", async (req, res) => {
    try {
        const produtos = await produtoService.getAll();

        return res.status(200).json(produtos);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            erro: "Erro ao buscar produtos."
        });
    }
});

export default router;