module.exports= app => {

    const tuto= require ("../controllers/tuto.controllers.js");

    var router= require ("express").Router();

    //nuevo tuto
    router.post ("/", tuto.create);

    //buscar todos
    router.get ("/", tuto.findAll);

    //busca todo publicado
    router.get ("/", tuto.finAllPublished);

    //busca x id
    router.get ("/:id", tuto.findOne);

    //actualiz x id
    router.put ("/:id", tuto.update);

    //elimino x id
    router.delete ("/:id", tuto.delete);

    //elimino todos
    router.delete ("/", tuto.deleteAll);

    app.use ("/api/tuto", router);

};