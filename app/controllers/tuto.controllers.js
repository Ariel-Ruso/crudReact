const db= require("../models");
const Tuto= db.tuto;
const Op= db.Sequelize.Op;

//creo y guardo nuevo tuto
exports.create= (req, res) => {

};

//recibo todos tutos
exports.findAll= (req, res) => {

};

//recibo un tuto con id
exports.findOne= (req, res) => {
    const id= req.params.id;

    Tuto.findByPk (id)
    .then (data => {
        res.send (data);
    })
    .catch (err => {
        res.status (500).send ({
            message: "Error de id" + id
        });
    });
};

//actualizo un tuto 
exports.update= (req, res) => {
    const id= req.params.id;

    Tuto.update (req.body, {
        where: { id: id}
    })
    .then (num => {
        if (num==1) {
            res.send ({
                message: "Objeto actualizado"
            });
        } else {
            res.semd ({
                message: "No se pudo actualizar el objeto "
            })
        }
    })
    .catch (err => {
        res.status (500).send ({
            message: "Error al actualizar el objeto "
        })
    })

};

//elimino un tuto
exporta.delete= (req, res) => {
    const id= req.params.id;

    Tuto.destroy ({
        where: { id: id}
    })
    .then (num => {
        if (num ==1) {
            res.send ({
                message: "Objeto eliminado"
            });
        }else {
            res.semd ( {
                message: "No se pudo eliminar" 
            });
        }
    })
    .catch (err => {
        res.status (500).send ({
            message: "Error al eliminar obj"
        });
    });
};

//elimino todos
exports.deleteAll= (req, res) => {
    Tuto.destroy ({
        where: {},
        truncate: false
    })
    .then (nums => {
        res.send ({
            message: `${nums} objetos eliminados`
        });
    })
    .catch (err => {
        res.status (500).send ( {
            message: "Error al eliminar todo"
        });
    });

};

//busco en todos tutos
exports.finAllPublished= (req, res) => {
    Tuto.findAll ({
        where: {
            published: true
        }
    })
    .then (data => {
        res.send (data);
    })
    .catch (err => {
        res.status (500).send ({
            message: "Error con obj publicados"
        });
    });

};