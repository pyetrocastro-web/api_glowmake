import pool from "../config/db.js";

class ProdutoService {

    async create(produto) {
        const {
            nome,
            marca,
            categoria,
            preco,
            quantidade_estoque
        } = produto;

        const query = `
            INSERT INTO produtos
            (nome, marca, categoria, preco, quantidade_estoque)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;

        const values = [
            nome,
            marca,
            categoria,
            preco,
            quantidade_estoque
        ];

        const result = await pool.query(query, values);

        return result.rows[0];
    }

    async getAll() {
        const query = `
            SELECT *
            FROM produtos
            ORDER BY nome;
        `;

        const result = await pool.query(query);

        return result.rows;
    }
}

export default new ProdutoService();