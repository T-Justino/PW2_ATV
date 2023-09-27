const sequelize = require("sequelize");
const connection = require("../database/database");


const produto = connection.define(
    'tbl_categoria',
    {
        cod_produto:{
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey:true
        },
        cod_categoria:{
            type: sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        nome_produto:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        valor_produto:{
            type: sequelize.TEXT,
            allowNull: false
        },
        imagem_produto:{
            type: sequelize.TEXT,
            allowNull: false
        },
        descricao_produto:{
            type: sequelize.TEXT,
            allowNull: false
        }
        
    });
    
    module.exports = produto;