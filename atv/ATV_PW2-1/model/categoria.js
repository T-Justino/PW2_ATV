const sequelize = require("sequelize");
const connection = require("../database/database");


const categoria = connection.define(
    'tbl_categoria',
    {
        cod_categoria:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        nome_categoria:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria:{
            type: sequelize.TEXT,
            allowNull: false
        }
        
    });

    module.exports = categoria;