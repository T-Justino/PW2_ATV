const express = require("express");
const sequelize = require("sequelize");
const produtoModel = require("../model/produto")
const router = express.Router();




router.post("/produto/cadastrarProduto", (req, res) => {
    res.send('Produto cadastrado com sucesso');
});

router.get("/produto/listarProduto", (req, res) => {
    res.send('Produto listado com sucesso');
});

router.put("/produto/alterarProduto", (req, res) => {
    res.send('Produto alterado com sucesso');
});

router.delete("/produto/excluirProduto", (req, res) => {
    res.send('Produto excluído com sucesso');
});

module.exports = router;