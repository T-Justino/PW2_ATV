const express = require("express");
const categoria = require("./model/categoria");
const produto = require("./model/produto");
const app = express();
const connection = require("./database/database");

app.use (express.json());
app.use(express.urlencoded({extended:true}));

const categoriaController = require ("./controller/categoriacontroller");
app.use ("/",categoriaController);

const produtoController = require ("./controller/produtocontroller");
app.use ("/",produtoController);

app.listen(3000, ()=>{
    console.log('API-ALEATÓRIA RODANDO EM : http://locahost:3000');
});