//controllers/departamento.js

module.exports = function(app) {
	var Departamento = app.model.Departamento;
  var Erro = app.model.business.Erro;
 	var controller = {};

 	//Lista todos os departamentos
  	controller.listarDepartamentos = function(req, res) {
      Departamento.find().exec()
        .then(
          function(departamentos){
            res.json(departamentos);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });

  	}; 

    //Salvar novo departamento
    controller.salvarDepartamento = function(req, res){
      var departamento = new Departamento(req.body);
       departamento.save(function(erro, departamento){
        if(erro){
          res.status(500).json(erro);
          console.log(erro);
        }else{
          res.json(departamento);
        }

       });
    }

    //Atualizar departamento
    controller.atualizarDepartamento = function(req, res){
      var _id =req.body._id;
       if(_id){
        Departamento.findByIdAndUpdate(_id, req.body).exec()
          .then(function(departamento){
            res.json(departamento);
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          })
       }else{
          res.status(500).json(new Erro(404, "Departamento não localizado"));
       }
    }

    //Remover departamento
    controller.removerDepartamento = function(req, res){
      var _id = req.body._id;
      if(_id){
        Departamento.remove({"_id" : _id}).exec()
          .then(function(){
            res.end();
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          })
      }
        else{
          res.status(500).json(new Erro(404, "Departamento nao localizado"));
        }

    }
  
  	return controller; 
  };
