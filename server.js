require ("./app/routes/tuto.routes");

const express= require ("express");
const bodyParser= require ("body-parser");
const cors= require ("cors");

const app= express();

var corsOptions= {
    origin: "https://localhost:8081"
};

app.use (cors(corsOptions));

const db= require ("./app/models");
db.sequelize.sync();

db.sequelize.sync ({force: true}).then (() =>{
    console.log("Elimino y re-sync db");
});

//req aplicacion/json
app.use(bodyPartser.json());

//requ aplicacion/www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//ruta simple
app.get("/", (req, res)=> {
    res.json ({message: "Bienvenido a la app"});
});

//puerto para requ
const PORT= process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log ('Servidor corriendo en puerto ${PORT}.');
});
