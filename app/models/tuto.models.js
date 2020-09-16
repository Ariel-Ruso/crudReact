const { Sequelize, BOOLEAN } = require("sequelize/types")
const { SELECT } = require("sequelize/types/lib/query-types")
const { sequelize } = require(".")

/*modelo sequelize representa tablas en mysql, se autogeneran id, titulo, 
descrip, publicada, creada, actualizada
no es necesario crear funciones, las incluye en funciones
*/

module.exports= (sequelize, Sequelize) => {

    const Tuto= sequelize.define("tuto", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize-BOOLEAN
        }
    });
    return Tuto;
};