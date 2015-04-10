//models/estado.js

module.exports = function(app) {
	var Estado = app.model.Estado;
    var Erro = app.model.business.Erro;
 	var controller = {};



  	controller.listarEstados = function(req, res) {
      Estado.find().exec()
        .then(
          function(estados){
            res.json(estados);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });

  	}; 

    controller.listarCidadesPorEstado = function(req, res){
      var sigla = req.params.sigla;
      Estado.find().select('cidades.nome').where("sigla").equals(sigla).exec()
      .then(
        function(cidades){
          res.json(cidades);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        });

    }

    controller.salvarEstado = function(req, res) {
       var estado = new Estado(req.body);
       console.log(estado);
       estado.save(function(erro, estado){
        if(erro){
          res.status(500).json(erro);
          console.log(erro);
        }else{
          res.json(estado);
        }

       });
    };

        controller.salvarCidade = function(req, res) {
          var _id = req.body._id;
       Estado.findById(_id).exec()
      .then(
        function(estado){
           console.log(estado);
          estado.cidades.push({ nome : req.body.nome});
          console.log(estado);
          Estado.findByIdAndUpdate(_id, estado).exec()
          .then(function(estado){
            console.log("sucesso");
            res.json(estado);
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });
        },
        function(erro){
          console.error(erro);
        });
    }; 


return controller;
};