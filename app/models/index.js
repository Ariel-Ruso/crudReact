const dbConfig= require ("../config/db.config.js");

const Sequelize= require ("sequelize");
const { HOST } = require("../config/db.config.js");

const sequelize= new  Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operadorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db= {};

db.Sequelize= Sequelize;
db.sequelize= sequelize;

db.tuto= require("./tuto.nodels.js")(sequelize, Sequelize);

module.exports= db;
