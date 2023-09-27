const express = require("express");
const sequelize = require("sequelize");
const produtoModel = require("../model/categoria")
const router = express.Router();

router.post("/categoria/cadastrarCategoria", (req, res) => {
    res.send('categoria cadastrada com sucesso');
});

router.get("/categoria/listarCategoria", (req, res) => {
    res.send('categoria listada com sucesso');
});

router.put("/categoria/alterarCategoria", (req, res) => {
    res.send('categoria alterada com sucesso');
});

router.delete("/categoria/excluirCategoria", (req, res) => {
    res.send('categoria excluída com sucesso');
});


module.exports = router;